"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const VideoDownload_1 = __importDefault(require("./classes/VideoDownload"));
const VideoStream_1 = __importDefault(require("./classes/VideoStream"));
const index_1 = require("./functions/index");
function download(url, options) {
    const d = new VideoDownload_1.default(url, options);
    return d;
}
function stream(url, options) {
    const s = new VideoStream_1.default(url, options);
    return s;
}
const ytdlp = {
    download,
    stream,
    thumbnail: index_1.getThumbnails,
};
module.exports = ytdlp;
