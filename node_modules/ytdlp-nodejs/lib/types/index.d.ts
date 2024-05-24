import { DownloadOptions, StreamOptions, StreamKeyWord, DownloadKeyWord } from "./utils/types";
import VideoDownload from "./classes/VideoDownload";
import VideoStream from "./classes/VideoStream";
import { getThumbnails } from "./functions/index";
declare function download<F extends DownloadKeyWord>(url: string, options?: DownloadOptions<F>): VideoDownload;
declare function stream<F extends StreamKeyWord>(url: string, options?: StreamOptions<F>): VideoStream;
declare const ytdlp: {
    download: typeof download;
    stream: typeof stream;
    thumbnail: typeof getThumbnails;
};
export = ytdlp;
//# sourceMappingURL=index.d.ts.map