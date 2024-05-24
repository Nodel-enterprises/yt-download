import EmitterEvent from "./EmitterEvent";
import { StreamOptions, PipeType } from "../utils/types";
declare class VideoStream extends EmitterEvent {
    pipe: PipeType<this>;
    private passThrough;
    constructor(url: string, options?: StreamOptions<any>);
}
export default VideoStream;
//# sourceMappingURL=VideoStream.d.ts.map