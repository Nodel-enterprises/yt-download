import { DownloadKeyWord, DownloadOptions, ProgressType, StreamKeyWord, StreamOptions } from "./types";
export declare function stringToProgress(str: string): ProgressType | undefined;
export declare function parseStreamOptions<T extends StreamKeyWord>(options?: StreamOptions<T>): string[];
export declare function parseDownloadOptions<T extends DownloadKeyWord>(options?: DownloadOptions<T>): string[];
//# sourceMappingURL=helper.d.ts.map