"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDownloadOptions = exports.parseStreamOptions = exports.stringToProgress = void 0;
const _1 = require(".");
function stringToProgress(str) {
    var _a, _b, _c, _d;
    try {
        if (!str.includes("bright"))
            (0, _1.thr)();
        const jsonStr = (_d = (_c = (_b = (_a = str.split("\r")) === null || _a === void 0 ? void 0 : _a[1]) === null || _b === void 0 ? void 0 : _b.trim()) === null || _c === void 0 ? void 0 : _c.split("-")) === null || _d === void 0 ? void 0 : _d[1];
        if (!jsonStr)
            (0, _1.thr)();
        const object = JSON.parse(jsonStr);
        const total = isNaN(Number(object.total))
            ? Number(object.total_estimate)
            : Number(object.total);
        return {
            status: object.status,
            downloaded: Number(object.downloaded),
            downloaded_str: (0, _1.formatBytes)(object.downloaded),
            total: total,
            total_str: (0, _1.formatBytes)(total),
            speed: Number(object.speed),
            speed_str: (0, _1.formatBytes)(object.speed) + "/s",
            eta: Number(object.eta),
            eta_str: (0, _1.secondsToHms)(object.eta),
            percentage: (0, _1.percentage)(object.downloaded, total),
            percentage_str: (0, _1.percentage)(object.downloaded, total) + "%",
        };
    }
    catch (err) {
        return undefined;
    }
}
exports.stringToProgress = stringToProgress;
const ByQuality = {
    "2160p": "bv*[height<=2160]",
    "1440p": "bv*[height<=1440]",
    "1080p": "bv*[height<=1080]",
    "720p": "bv*[height<=720]",
    "480p": "bv*[height<=480]",
    "360p": "bv*[height<=360]",
    "240p": "bv*[height<=240]",
    "144p": "bv*[height<=133]",
    highest: "bv*",
    lowest: "wv*",
};
function parseStreamOptions(options) {
    if (!options || Object.keys(options).length === 0) {
        return ["-f", "b*[vcode!=none][acodec!=none]"];
    }
    let formatArr = [];
    const { filter, quality, command } = options;
    if (command && command.length) {
        return command;
    }
    if (filter === "audioonly") {
        formatArr = ["-f", quality == "lowest" ? "wa" : "ba"];
    }
    if (filter === "videoonly") {
        formatArr = [
            "-f",
            (quality ? ByQuality[quality] : "bv*") + "[acodec=none]",
        ];
    }
    if (filter === "audioandvideo") {
        formatArr = [
            "-f",
            (quality == "lowest" ? "w*" : "b*") +
                "[vcodec!=none][acodec!=none]",
        ];
    }
    return formatArr;
}
exports.parseStreamOptions = parseStreamOptions;
function parseDownloadOptions(options) {
    if (!options || Object.keys(options).length === 0) {
        return ["-f", "bv*+ba"];
    }
    let formatArr = [];
    const { filter, quality, command, format, output } = options;
    if (command && command.length) {
        return command;
    }
    if (filter === "audioonly") {
        formatArr = [
            "-x",
            "--audio-format",
            format ? format : "mp3",
            "--audio-quality",
            output ? output.toString() : "5",
        ];
    }
    if (filter === "videoonly") {
        formatArr = [
            "-f",
            (quality ? ByQuality[quality] : "bv*") + "[acodec=none]",
        ];
    }
    if (filter === "audioandvideo") {
        formatArr = [
            "-f",
            (quality == "lowest" ? "w*" : "b*") +
                "[vcodec!=none][acodec!=none][ext=" +
                (format ? format : "mp4") +
                "]",
        ];
    }
    if (filter === "mergevideo") {
        formatArr = ["-f", (quality ? ByQuality[quality] : "bv*") + "+ba"];
    }
    if (options.embedSubs) {
        formatArr = formatArr.concat("--embed-subs");
    }
    if (options.embedThumbnail) {
        formatArr = formatArr.concat("--embed-thumbnail");
    }
    return formatArr;
}
exports.parseDownloadOptions = parseDownloadOptions;
