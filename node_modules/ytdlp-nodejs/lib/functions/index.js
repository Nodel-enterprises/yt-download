"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getThumbnails = exports.validateUrl = void 0;
function validateUrl(url) {
    const parsed = new URL(url.trim());
    const urlRegex = /https:\/\/www.youtube.com\/(playlist|watch|shorts)(\?|\/)/g;
    const checkUrl = urlRegex.test(parsed.toString());
    if (!checkUrl)
        return false;
    const isVideo = parsed.searchParams.get("v");
    const isPlaylist = parsed.searchParams.get("list");
    if (isVideo || isPlaylist) {
        return true;
    }
    else {
        return false;
    }
}
exports.validateUrl = validateUrl;
function validateId(id) {
    const videoRegex = /^[a-zA-Z0-9-_]{11}$/;
    const playlistRegex = /^[a-zA-Z0-9-_]{34}$/;
    if (videoRegex.test(id.trim()) || playlistRegex.test(id.trim())) {
        return true;
    }
    else {
        return false;
    }
}
function getPlaylistId(url) {
    if (!validateUrl(url.trim()))
        throw new Error("Url not valid");
    const parsed = new URL(url);
    const listId = parsed.searchParams.get("list");
    if (!listId)
        throw new Error("This is not playlist url");
    return listId;
}
function getVideoId(url) {
    if (!validateUrl(url.trim()))
        throw new Error("Url not valid");
    const parsed = new URL(url);
    const videoId = parsed.searchParams.get("v");
    if (!videoId)
        throw new Error("This is not Video url");
    return videoId;
}
function normalizeUrl(url) {
    if (!validateUrl(url.trim()))
        throw new Error("Url not valid");
    const parsed = new URL(url.trim());
    const isVideo = parsed.searchParams.get("v");
    const isPlaylist = parsed.searchParams.get("list");
    if (isVideo) {
        return isVideo;
    }
    else if (isPlaylist) {
        return isPlaylist;
    }
    else {
        throw new Error("Url couldn't normalize");
    }
}
function getThumbnails(url, { quality = "default", type = "jpg" } = {
    quality: "default",
    type: "jpg",
}) {
    if (!validateUrl(url)) {
        throw Error("Url not valid!");
    }
    const videoId = getVideoId(url);
    if (!videoId) {
        throw Error("video Id not valid!");
    }
    switch (quality) {
        case "max":
            return `https://i1.ytimg.com/vi${type === "webp" ? "_webp" : ""}/${videoId}/maxresdefault.${type}`;
        case "hq":
            return `https://i1.ytimg.com/vi${type === "webp" ? "_webp" : ""}/${videoId}/mqdefault.${type}`;
        case "mq":
            return `https://i1.ytimg.com/vi${type === "webp" ? "_webp" : ""}/${videoId}/hqdefault.${type}`;
        case "sd":
            return `https://i1.ytimg.com/vi${type === "webp" ? "_webp" : ""}/${videoId}/sddefault.${type}`;
        case "default":
            return `https://i1.ytimg.com/vi${type === "webp" ? "_webp" : ""}/${videoId}/default.${type}`;
        default:
            return "Please provide proper input for quality (max,hq,mq,sd,default)";
    }
}
exports.getThumbnails = getThumbnails;
