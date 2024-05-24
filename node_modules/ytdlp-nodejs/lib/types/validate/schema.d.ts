import { z } from "zod";
export declare const OutputTypeSchema: z.ZodOptional<z.ZodObject<{
    output: z.ZodUnion<[z.ZodString, z.ZodOptional<z.ZodObject<{
        outDir: z.ZodString;
        fileName: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEnum<["default"]>]>>;
    }, "strip", z.ZodTypeAny, {
        outDir: string;
        fileName?: string | undefined;
    }, {
        outDir: string;
        fileName?: string | undefined;
    }>>]>;
}, "strip", z.ZodTypeAny, {
    output?: string | {
        outDir: string;
        fileName?: string | undefined;
    } | undefined;
}, {
    output?: string | {
        outDir: string;
        fileName?: string | undefined;
    } | undefined;
}>>;
export declare const StreamOptionsSchema: z.ZodOptional<z.ZodDiscriminatedUnion<"filter", [z.ZodObject<{
    filter: z.ZodLiteral<"audioandvideo">;
    quality: z.ZodOptional<z.ZodEnum<["highest", "lowest"]>>;
    command: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    filter: "audioandvideo";
    quality?: "highest" | "lowest" | undefined;
    command?: string[] | undefined;
}, {
    filter: "audioandvideo";
    quality?: "highest" | "lowest" | undefined;
    command?: string[] | undefined;
}>, z.ZodObject<{
    filter: z.ZodLiteral<"audioonly">;
    quality: z.ZodOptional<z.ZodNumber>;
    command: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    filter: "audioonly";
    quality?: number | undefined;
    command?: string[] | undefined;
}, {
    filter: "audioonly";
    quality?: number | undefined;
    command?: string[] | undefined;
}>, z.ZodObject<{
    filter: z.ZodLiteral<"videoonly">;
    quality: z.ZodOptional<z.ZodEnum<["2160p", "1440p", "1080p", "720p", "480p", "360p", "240p", "144p", "highest", "lowest"]>>;
    command: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    filter: "videoonly";
    quality?: "2160p" | "1440p" | "1080p" | "720p" | "480p" | "360p" | "240p" | "144p" | "highest" | "lowest" | undefined;
    command?: string[] | undefined;
}, {
    filter: "videoonly";
    quality?: "2160p" | "1440p" | "1080p" | "720p" | "480p" | "360p" | "240p" | "144p" | "highest" | "lowest" | undefined;
    command?: string[] | undefined;
}>]>>;
export declare const DownloadOptionsSchema: z.ZodOptional<z.ZodIntersection<z.ZodDiscriminatedUnion<"filter", [z.ZodObject<{
    filter: z.ZodLiteral<"audioandvideo">;
    quality: z.ZodOptional<z.ZodEnum<["highest", "lowest"]>>;
    format: z.ZodOptional<z.ZodEnum<["mp4", "webm"]>>;
    embedSubs: z.ZodOptional<z.ZodBoolean>;
    embedThumbnail: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    filter: "audioandvideo";
    quality?: "highest" | "lowest" | undefined;
    format?: "mp4" | "webm" | undefined;
    embedSubs?: boolean | undefined;
    embedThumbnail?: boolean | undefined;
}, {
    filter: "audioandvideo";
    quality?: "highest" | "lowest" | undefined;
    format?: "mp4" | "webm" | undefined;
    embedSubs?: boolean | undefined;
    embedThumbnail?: boolean | undefined;
}>, z.ZodObject<{
    filter: z.ZodLiteral<"audioonly">;
    quality: z.ZodOptional<z.ZodNumber>;
    format: z.ZodOptional<z.ZodEnum<["aac", "flac", "mp3", "m4a", "opus", "vorbis", "wav", "alac"]>>;
}, "strip", z.ZodTypeAny, {
    filter: "audioonly";
    quality?: number | undefined;
    format?: "aac" | "flac" | "mp3" | "m4a" | "opus" | "vorbis" | "wav" | "alac" | undefined;
}, {
    filter: "audioonly";
    quality?: number | undefined;
    format?: "aac" | "flac" | "mp3" | "m4a" | "opus" | "vorbis" | "wav" | "alac" | undefined;
}>, z.ZodObject<{
    filter: z.ZodLiteral<"videoonly">;
    quality: z.ZodOptional<z.ZodEnum<["2160p", "1440p", "1080p", "720p", "480p", "360p", "240p", "144p", "highest", "lowest"]>>;
    format: z.ZodOptional<z.ZodEnum<["mp4", "webm"]>>;
    embedSubs: z.ZodOptional<z.ZodBoolean>;
    embedThumbnail: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    filter: "videoonly";
    quality?: "2160p" | "1440p" | "1080p" | "720p" | "480p" | "360p" | "240p" | "144p" | "highest" | "lowest" | undefined;
    format?: "mp4" | "webm" | undefined;
    embedSubs?: boolean | undefined;
    embedThumbnail?: boolean | undefined;
}, {
    filter: "videoonly";
    quality?: "2160p" | "1440p" | "1080p" | "720p" | "480p" | "360p" | "240p" | "144p" | "highest" | "lowest" | undefined;
    format?: "mp4" | "webm" | undefined;
    embedSubs?: boolean | undefined;
    embedThumbnail?: boolean | undefined;
}>, z.ZodObject<{
    filter: z.ZodLiteral<"mergevideo">;
    quality: z.ZodOptional<z.ZodEnum<["2160p", "1440p", "1080p", "720p", "480p", "360p", "240p", "144p", "highest", "lowest"]>>;
    format: z.ZodOptional<z.ZodEnum<["avi", "flv", "mkv", "mov", "mp4", "webm"]>>;
    embedSubs: z.ZodOptional<z.ZodBoolean>;
    embedThumbnail: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    filter: "mergevideo";
    quality?: "2160p" | "1440p" | "1080p" | "720p" | "480p" | "360p" | "240p" | "144p" | "highest" | "lowest" | undefined;
    format?: "mp4" | "webm" | "mkv" | "flv" | "avi" | "mov" | undefined;
    embedSubs?: boolean | undefined;
    embedThumbnail?: boolean | undefined;
}, {
    filter: "mergevideo";
    quality?: "2160p" | "1440p" | "1080p" | "720p" | "480p" | "360p" | "240p" | "144p" | "highest" | "lowest" | undefined;
    format?: "mp4" | "webm" | "mkv" | "flv" | "avi" | "mov" | undefined;
    embedSubs?: boolean | undefined;
    embedThumbnail?: boolean | undefined;
}>]>, z.ZodOptional<z.ZodObject<{
    output: z.ZodUnion<[z.ZodString, z.ZodOptional<z.ZodObject<{
        outDir: z.ZodString;
        fileName: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEnum<["default"]>]>>;
    }, "strip", z.ZodTypeAny, {
        outDir: string;
        fileName?: string | undefined;
    }, {
        outDir: string;
        fileName?: string | undefined;
    }>>]>;
}, "strip", z.ZodTypeAny, {
    output?: string | {
        outDir: string;
        fileName?: string | undefined;
    } | undefined;
}, {
    output?: string | {
        outDir: string;
        fileName?: string | undefined;
    } | undefined;
}>>>>;
//# sourceMappingURL=schema.d.ts.map