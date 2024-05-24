"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DownloadOptionsSchema = exports.StreamOptionsSchema = exports.OutputTypeSchema = void 0;
const zod_1 = require("zod");
const videoQuality = zod_1.z.enum([
    "2160p",
    "1440p",
    "1080p",
    "720p",
    "480p",
    "360p",
    "240p",
    "144p",
    "highest",
    "lowest",
]);
exports.OutputTypeSchema = zod_1.z
    .object({
    output: zod_1.z
        .string()
        .min(1)
        .or(zod_1.z
        .object({
        outDir: zod_1.z.string().min(1),
        fileName: zod_1.z
            .string()
            .min(1)
            .or(zod_1.z.enum(["default"]))
            .optional(),
    })
        .optional()),
})
    .optional();
exports.StreamOptionsSchema = zod_1.z
    .discriminatedUnion("filter", [
    zod_1.z.object({
        filter: zod_1.z.literal("audioandvideo"),
        quality: zod_1.z.enum(["highest", "lowest"]).optional(),
        command: zod_1.z.array(zod_1.z.string()).optional(),
    }),
    zod_1.z.object({
        filter: zod_1.z.literal("audioonly"),
        quality: zod_1.z.number().nonnegative().max(10).optional(),
        command: zod_1.z.array(zod_1.z.string()).optional(),
    }),
    zod_1.z.object({
        filter: zod_1.z.literal("videoonly"),
        quality: videoQuality.optional(),
        command: zod_1.z.array(zod_1.z.string()).optional(),
    }),
])
    .optional();
exports.DownloadOptionsSchema = zod_1.z
    .discriminatedUnion("filter", [
    zod_1.z.object({
        filter: zod_1.z.literal("audioandvideo"),
        quality: zod_1.z.enum(["highest", "lowest"]).optional(),
        format: zod_1.z.enum(["mp4", "webm"]).optional(),
        embedSubs: zod_1.z.boolean().optional(),
        embedThumbnail: zod_1.z.boolean().optional(),
    }),
    zod_1.z.object({
        filter: zod_1.z.literal("audioonly"),
        quality: zod_1.z.number().nonnegative().max(10).optional(),
        format: zod_1.z
            .enum([
            "aac",
            "flac",
            "mp3",
            "m4a",
            "opus",
            "vorbis",
            "wav",
            "alac",
        ])
            .optional(),
    }),
    zod_1.z.object({
        filter: zod_1.z.literal("videoonly"),
        quality: videoQuality.optional(),
        format: zod_1.z.enum(["mp4", "webm"]).optional(),
        embedSubs: zod_1.z.boolean().optional(),
        embedThumbnail: zod_1.z.boolean().optional(),
    }),
    zod_1.z.object({
        filter: zod_1.z.literal("mergevideo"),
        quality: videoQuality.optional(),
        format: zod_1.z
            .enum(["avi", "flv", "mkv", "mov", "mp4", "webm"])
            .optional(),
        embedSubs: zod_1.z.boolean().optional(),
        embedThumbnail: zod_1.z.boolean().optional(),
    }),
])
    .and(exports.OutputTypeSchema)
    .optional();
