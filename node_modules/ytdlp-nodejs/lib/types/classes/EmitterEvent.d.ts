import { ProgressType } from "../utils/types";
type EventType = {
    progress: (progress: ProgressType) => void;
    error: (err: Error) => void;
    finished: () => void;
};
type EventName = keyof EventType;
type EventListener<T extends EventName> = EventType[T];
type EmitData<T extends EventName> = {
    progress: ProgressType;
    error: Error;
    finished: undefined;
}[T];
type ReturnEmit<T extends EventName> = T extends "error" ? void : boolean;
declare class EmitterEvent {
    private listeners;
    protected emit<T extends EventName>(event: T, data: EmitData<T>): ReturnEmit<T>;
    on<T extends EventName>(event: T, listener: EventListener<T>): this;
}
export default EmitterEvent;
//# sourceMappingURL=EmitterEvent.d.ts.map