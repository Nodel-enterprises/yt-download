import { DownloadKeyWord, DownloadOptions, StreamKeyWord, StreamOptions } from "../utils/types";
export declare function StreamOptionsValidate<T extends StreamKeyWord>(options?: StreamOptions<T>): import("zod").SafeParseReturnType<{
    filter: "audioandvideo";
    quality?: "highest" | "lowest" | undefined;
    command?: string[] | undefined;
} | {
    filter: "audioonly";
    quality?: number | undefined;
    command?: string[] | undefined;
} | {
    filter: "videoonly";
    quality?: "2160p" | "1440p" | "1080p" | "720p" | "480p" | "360p" | "240p" | "144p" | "highest" | "lowest" | undefined;
    command?: string[] | undefined;
} | undefined, {
    filter: "audioandvideo";
    quality?: "highest" | "lowest" | undefined;
    command?: string[] | undefined;
} | {
    filter: "audioonly";
    quality?: number | undefined;
    command?: string[] | undefined;
} | {
    filter: "videoonly";
    quality?: "2160p" | "1440p" | "1080p" | "720p" | "480p" | "360p" | "240p" | "144p" | "highest" | "lowest" | undefined;
    command?: string[] | undefined;
} | undefined>;
export declare function DownloadOptionsValidate<T extends DownloadKeyWord>(options?: DownloadOptions<T>): import("zod").SafeParseReturnType<(({
    filter: "audioandvideo";
    quality?: "highest" | "lowest" | undefined;
    format?: "mp4" | "webm" | undefined;
    embedSubs?: boolean | undefined;
    embedThumbnail?: boolean | undefined;
} | {
    filter: "audioonly";
    quality?: number | undefined;
    format?: "aac" | "flac" | "mp3" | "m4a" | "opus" | "vorbis" | "wav" | "alac" | undefined;
} | {
    filter: "videoonly";
    quality?: "2160p" | "1440p" | "1080p" | "720p" | "480p" | "360p" | "240p" | "144p" | "highest" | "lowest" | undefined;
    format?: "mp4" | "webm" | undefined;
    embedSubs?: boolean | undefined;
    embedThumbnail?: boolean | undefined;
} | {
    filter: "mergevideo";
    quality?: "2160p" | "1440p" | "1080p" | "720p" | "480p" | "360p" | "240p" | "144p" | "highest" | "lowest" | undefined;
    format?: "mp4" | "webm" | "mkv" | "flv" | "avi" | "mov" | undefined;
    embedSubs?: boolean | undefined;
    embedThumbnail?: boolean | undefined;
}) & ({
    output?: string | {
        outDir: string;
        fileName?: string | undefined;
    } | undefined;
} | undefined)) | undefined, (({
    filter: "audioandvideo";
    quality?: "highest" | "lowest" | undefined;
    format?: "mp4" | "webm" | undefined;
    embedSubs?: boolean | undefined;
    embedThumbnail?: boolean | undefined;
} | {
    filter: "audioonly";
    quality?: number | undefined;
    format?: "aac" | "flac" | "mp3" | "m4a" | "opus" | "vorbis" | "wav" | "alac" | undefined;
} | {
    filter: "videoonly";
    quality?: "2160p" | "1440p" | "1080p" | "720p" | "480p" | "360p" | "240p" | "144p" | "highest" | "lowest" | undefined;
    format?: "mp4" | "webm" | undefined;
    embedSubs?: boolean | undefined;
    embedThumbnail?: boolean | undefined;
} | {
    filter: "mergevideo";
    quality?: "2160p" | "1440p" | "1080p" | "720p" | "480p" | "360p" | "240p" | "144p" | "highest" | "lowest" | undefined;
    format?: "mp4" | "webm" | "mkv" | "flv" | "avi" | "mov" | undefined;
    embedSubs?: boolean | undefined;
    embedThumbnail?: boolean | undefined;
}) & ({
    output?: string | {
        outDir: string;
        fileName?: string | undefined;
    } | undefined;
} | undefined)) | undefined>;
export declare function parseAndValidateUrl(url: string): string | undefined;
//# sourceMappingURL=index.d.ts.map