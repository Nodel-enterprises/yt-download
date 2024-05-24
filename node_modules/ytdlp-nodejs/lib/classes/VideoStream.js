"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EmitterEvent_1 = __importDefault(require("./EmitterEvent"));
const stream_1 = require("stream");
const validate_1 = require("../validate");
const binfile_1 = require("../utils/binfile");
const utils_1 = require("../utils");
const child_process_1 = require("child_process");
const helper_1 = require("../utils/helper");
class VideoStream extends EmitterEvent_1.default {
    constructor(url, options) {
        super();
        this.passThrough = new stream_1.PassThrough();
        this.pipe = (destination, options) => {
            this.passThrough.pipe(destination, options);
            return this;
        };
        const parseUrl = (0, validate_1.parseAndValidateUrl)(url);
        if (!parseUrl) {
            this.emit("error", new Error("Url not valid"));
            return this;
        }
        if (!(0, validate_1.StreamOptionsValidate)(options).success) {
            this.emit("error", new Error("Options not validate"));
            return this;
        }
        const parseOptions = (0, helper_1.parseStreamOptions)(options);
        const binPath = (0, binfile_1.getBinPath)();
        if (!binPath)
            return this;
        const { ytdlpPath } = binPath;
        const process = (0, child_process_1.spawn)(ytdlpPath, [
            parseUrl,
            "-o",
            "-",
            ...parseOptions,
            "--progress-template",
            utils_1.PROGRESS_STRING,
        ]);
        process.stderr.on("data", (chunk) => {
            const str = Buffer.from(chunk).toString();
            if (str.includes("Requested format is not available.")) {
                process.stderr.emit("error", new Error("Requested format is not available."));
            }
            const result = (0, helper_1.stringToProgress)(str);
            result && this.emit("progress", result);
        });
        process.stderr.on("end", () => {
            this.emit("finished", undefined);
        });
        process.stdout.pipe(this.passThrough);
        process.stdout.on("error", (err) => {
            this.emit("error", err);
        });
        process.stderr.on("error", (err) => {
            this.emit("error", err);
        });
        return this;
    }
}
exports.default = VideoStream;
