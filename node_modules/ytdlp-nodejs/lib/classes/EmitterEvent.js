"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmitterEvent {
    constructor() {
        this.listeners = {};
    }
    emit(event, data) {
        if (event == "error") {
            setTimeout(() => {
                let fns = this.listeners[event];
                if (!fns)
                    throw data;
                fns.forEach((f) => {
                    f(data);
                });
            }, 1);
            return "";
        }
        let fns = this.listeners[event];
        if (!fns)
            return false;
        fns.forEach((f) => {
            f(data);
        });
        return true;
    }
    on(event, listener) {
        var _a;
        this.listeners[event] = this.listeners[event] || [];
        (_a = this.listeners[event]) === null || _a === void 0 ? void 0 : _a.push(listener);
        return this;
    }
}
exports.default = EmitterEvent;
