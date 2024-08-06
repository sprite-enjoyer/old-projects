import { action, computed, makeObservable, observable } from "mobx";
import { formatTime } from "../../../common/utils";
import { TimerWorkerMessage, TimerWorkerResponse } from "../../../common/types";
import timerWorkerURL from "../../../workers/Timer.worker?worker&url";

const DEFAULT_DURATION_SECONDS = 5;

class TimerBoxStore {
  timerIsStarted: boolean = false;
  timerIsPaused: boolean = false;
  secondsPassed: number = 0;
  private readonly duration: number = DEFAULT_DURATION_SECONDS;
  worker?: Worker;

  constructor(duration: number = DEFAULT_DURATION_SECONDS) {
    this.duration = duration;

    makeObservable(this, {
      timerIsStarted: observable,
      timerIsPaused: observable,
      secondsPassed: observable,
      startTimer: action,
      discardTimer: action,
      onTimerUpdate: action,
      resumeTimer: action,
      stopTimer: action,
      elapsedTimeFormatted: computed,
      secondsLeftToCompletion: computed,
    });
  }

  get elapsedTimeFormatted(): string {
    return formatTime(this.secondsPassed);
  }

  get secondsLeftToCompletion() {
    return formatTime(this.duration - this.secondsPassed);
  }

  toggleTimer() {
    if (this.timerIsPaused) {
      this.resumeTimer();
      return;
    }
    if (!this.timerIsStarted) {
      this.startTimer();
      return;
    } else this.stopTimer();
  }

  startTimer() {
    this.timerIsPaused = false;
    this.worker = new Worker(timerWorkerURL, { type: "module" });
    this.worker.addEventListener("message", (event) => this.onTimerUpdate(event));
    this.timerIsStarted = true;
    console.log("timer started");
    const message: TimerWorkerMessage = { type: "start" };
    this.worker.postMessage(message);
  }

  resumeTimer() {
    if (!this.timerIsPaused) {
      console.error("Timer is not paused!");
      return;
    }
    if (!this.worker) {
      console.error("Worker doens't exist!");
      return;
    }

    this.timerIsPaused = false;
    this.timerIsStarted = true;
    const message: TimerWorkerMessage = { type: "start" };
    this.worker?.postMessage(message);
  }

  stopTimer() {
    if (this.timerIsPaused) {
      console.warn("Timer is already paused.");
    }
    this.timerIsPaused = true;
    this.timerIsStarted = false;
    if (!this.worker) return;
    this.timerIsStarted = false;
    const message: TimerWorkerMessage = { type: "stop" };
    this.worker.postMessage(message);
  }

  discardTimer() {
    if (!this.worker) return;
    this.timerIsStarted = false;
    this.timerIsPaused = false;
    this.secondsPassed = 0;
    const message: TimerWorkerMessage = { type: "discard" };
    this.worker.postMessage(message);
  }

  onTimerUpdate(event: MessageEvent<TimerWorkerResponse>) {
    if (!this.timerIsStarted) {
      console.error("Worker posted a message but the timer is not started!");
      return;
    }
    const { secondsPassed } = event.data;
    if (secondsPassed === this.secondsPassed) return;
    this.secondsPassed = secondsPassed;

    console.log("timer Tick", secondsPassed);

    if (this.secondsPassed === this.duration + 1) {
      this.discardTimer();
    }
  }
}

export default TimerBoxStore;
