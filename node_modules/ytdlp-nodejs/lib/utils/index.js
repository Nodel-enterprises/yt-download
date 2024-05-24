"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.thr = exports.secondsToHms = exports.percentage = exports.formatBytes = exports.PROGRESS_STRING = void 0;
exports.PROGRESS_STRING = 'bright-{"status":"%(progress.status)s","downloaded":"%(progress.downloaded_bytes)s","total":"%(progress.total_bytes)s","total_estimate":"%(progress.total_bytes_estimate)s","speed":"%(progress.speed)s","eta":"%(progress.eta)s"}';
function formatBytes(bytes, decimals = 2) {
    let newBytes = Number(bytes);
    if (newBytes === 0 || isNaN(newBytes))
        return newBytes + " Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(newBytes) / Math.log(k));
    return parseFloat((newBytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}
exports.formatBytes = formatBytes;
function toFixedNumber(num, digits, base) {
    var pow = Math.pow(base || 10, digits);
    return Math.round(num * pow) / pow;
}
function percentage(partialValue, totalValue) {
    return toFixedNumber((100 * Number(partialValue)) / Number(totalValue), 2);
}
exports.percentage = percentage;
function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);
    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s >= 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
}
exports.secondsToHms = secondsToHms;
function thr() {
    throw new Error();
}
exports.thr = thr;
