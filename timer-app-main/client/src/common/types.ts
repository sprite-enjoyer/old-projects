export type TimerEventType = "start" | "stop" | "discard";
export type TimerWorkerMessage = { type: TimerEventType };
export type TimerWorkerResponse = { secondsPassed: number };
