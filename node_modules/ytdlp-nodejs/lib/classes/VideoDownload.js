"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmitterEvent_1 = __importDefault(require("./EmitterEvent"));
const validate_1 = require("../validate");
const utils_1 = require("../utils");
const child_process_1 = require("child_process");
const binfile_1 = require("../utils/binfile");
const helper_1 = require("../utils/helper");
const schema_1 = require("../validate/schema");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
class VideoDownload extends EmitterEvent_1.default {
    constructor(url, options) {
        super();
        const parseUrl = (0, validate_1.parseAndValidateUrl)(url);
        if (!parseUrl) {
            this.emit("error", new Error("Url not valid"));
            return this;
        }
        if (!(0, validate_1.DownloadOptionsValidate)(options).success) {
            this.emit("error", new Error("Options not validate"));
            return this;
        }
        let parseOptions = (0, helper_1.parseDownloadOptions)(options);
        try {
            const output = this.getOutput(options === null || options === void 0 ? void 0 : options.output);
            parseOptions = parseOptions.concat(["-o", output]);
        }
        catch (err) {
            this.emit("error", err);
            return this;
        }
        const binPath = (0, binfile_1.getBinPath)();
        if (!binPath)
            return this;
        const { ytdlpPath } = binPath;
        const process = (0, child_process_1.spawn)(ytdlpPath, [
            parseUrl,
            ...parseOptions,
            "--progress-template",
            utils_1.PROGRESS_STRING,
        ]);
        process.stdout.on("data", (data) => {
            const dataStr = Buffer.from(data).toString();
            if (dataStr.includes("Requested format is not available.")) {
                process.stdout.emit("error", new Error("Requested format is not available."));
            }
            if (dataStr.includes("has already been downloaded")) {
                process.stdout.emit("error", new Error("File already exists."));
            }
            const result = (0, helper_1.stringToProgress)(dataStr);
            result && this.emit("progress", result);
        });
        process.stdout.on("error", (err) => {
            this.emit("error", err);
        });
        process.stdout.on("end", () => {
            this.emit("finished", undefined);
        });
        return this;
    }
    getOutput(output) {
        let outputStr = "";
        if (!output || output == "default") {
            return "%(title)s %(height)sp .%(ext)s";
        }
        const check = schema_1.OutputTypeSchema.safeParse({ output });
        if (!check.success) {
            const errorObj = check.error.issues[0];
            const errorText = `${errorObj.path} type error, ${errorObj.message}`;
            throw new Error(errorText);
        }
        const extReg = /(\.aac|\.flac|\.mp3|\.m4a|\.opus|\.vorbis|\.wav\.mkv|\.mp4|\.ogg|\.webm|\.flv)$/g;
        if (typeof output === "string") {
            output = path_1.default.resolve(output);
            if (fs_1.default.lstatSync(output).isDirectory()) {
                outputStr = path_1.default.join(output, "%(title)s %(height)sp .%(ext)s");
            }
            else if (extReg.test(output)) {
                if (!fs_1.default.existsSync(path_1.default.dirname(output))) {
                    throw new Error("Output path not valid");
                }
            }
        }
        if (typeof output === "object") {
            let newObj = {
                outDir: "",
                filename: "",
            };
            let outDir = path_1.default.resolve(output.outDir);
            if (!fs_1.default.existsSync(outDir)) {
                throw new Error("Output directory not valid");
            }
            else {
                newObj.outDir = outDir;
            }
            if (output.fileName) {
                if (extReg.test(output.fileName)) {
                    newObj.filename = output.fileName;
                }
                else {
                    throw new Error("File name not valid");
                }
            }
            outputStr = path_1.default.join(newObj.outDir, newObj.filename
                ? newObj.filename
                : "%(title)s %(height)sp .%(ext)s");
        }
        return outputStr ? outputStr : "%(title)s %(height)sp .%(ext)s";
    }
}
exports.default = VideoDownload;
