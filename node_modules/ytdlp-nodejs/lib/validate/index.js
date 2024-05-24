"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseAndValidateUrl = exports.DownloadOptionsValidate = exports.StreamOptionsValidate = void 0;
const utils_1 = require("../utils");
const schema_1 = require("./schema");
function StreamOptionsValidate(options) {
    return schema_1.StreamOptionsSchema.safeParse(options);
}
exports.StreamOptionsValidate = StreamOptionsValidate;
function DownloadOptionsValidate(options) {
    return schema_1.DownloadOptionsSchema.safeParse(options);
}
exports.DownloadOptionsValidate = DownloadOptionsValidate;
function parseAndValidateUrl(url) {
    try {
        const parsed = new URL(url.trim());
        const urlRegex = /https:\/\/www.youtube.com\/(playlist|watch|shorts)(\?|\/)/g;
        const checkUrl = urlRegex.test(parsed.toString());
        if (!checkUrl)
            (0, utils_1.thr)();
        const videoId = parsed.searchParams.get("v");
        if (!videoId)
            (0, utils_1.thr)();
        const videoRegex = /^[a-zA-Z0-9-_]{11}$/;
        if (!videoRegex.test(videoId.trim()))
            (0, utils_1.thr)();
        return `https://www.youtube.com/watch?v=${videoId}`;
    }
    catch (err) {
        return undefined;
    }
}
exports.parseAndValidateUrl = parseAndValidateUrl;
