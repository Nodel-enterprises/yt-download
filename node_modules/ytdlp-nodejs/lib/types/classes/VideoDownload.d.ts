import EmitterEvent from "./EmitterEvent";
import { DownloadOptions } from "../utils/types";
declare class VideoDownload extends EmitterEvent {
    constructor(url: string, options?: DownloadOptions<any>);
    private getOutput;
}
export default VideoDownload;
//# sourceMappingURL=VideoDownload.d.ts.map