import { TimerWorkerMessage, TimerWorkerResponse } from "../common/types";

const INTERVAL_MS = 200;
let intervalID = -1;
let pausedOn = 0;
let secondsPassed = 0;

self.onmessage = (event: MessageEvent<TimerWorkerMessage>) => {
  const { type } = event.data;

  switch (type) {
    case "start":
      handleStartTimer();
      break;
    case "stop":
      handleStopTimer();
      break;
    case "discard":
      handleDiscardTimer();
  }
};

const handleStartTimer = () => {
  const startTime = Date.now();

  const stepFunc = () => {
    const diff = Date.now() - startTime;
    const secondsDiff = Math.floor(diff / 1000) + pausedOn;
    secondsPassed = secondsDiff;
    const response: TimerWorkerResponse = { secondsPassed: secondsDiff };
    postMessage(response);
  };

  intervalID = setInterval(stepFunc, INTERVAL_MS);
};

const handleStopTimer = () => {
  clearInterval(intervalID);
  pausedOn = secondsPassed;
};

const handleDiscardTimer = () => self.close();
