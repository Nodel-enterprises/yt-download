export declare function validateUrl(url: string): boolean;
export type ThumbnailsOptions = {
    quality?: "max" | "hq" | "mq" | "sd" | "default";
    type?: "jpg" | "webp";
};
export declare function getThumbnails(url: string, { quality, type }?: ThumbnailsOptions): string;
//# sourceMappingURL=index.d.ts.map