export declare const PROGRESS_STRING = "bright-{\"status\":\"%(progress.status)s\",\"downloaded\":\"%(progress.downloaded_bytes)s\",\"total\":\"%(progress.total_bytes)s\",\"total_estimate\":\"%(progress.total_bytes_estimate)s\",\"speed\":\"%(progress.speed)s\",\"eta\":\"%(progress.eta)s\"}";
export declare function formatBytes(bytes: string | number, decimals?: number): string;
export declare function percentage(partialValue: string | number, totalValue: string | number): number;
export declare function secondsToHms(d: number | string): string;
export declare function thr(): void;
//# sourceMappingURL=index.d.ts.map