import { useEffect, useState } from "react";
import styles from "./TimerBox.module.scss";
import TimerBoxStore from "./TimerBoxStore";
import { observer } from "mobx-react";

const TimerBox = () => {
  const [timerBoxStore, setTimerBoxStore] = useState<TimerBoxStore>();

  useEffect(() => {
    const store = new TimerBoxStore();
    setTimerBoxStore(store);

    return () => timerBoxStore?.worker?.terminate();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.timer}>{timerBoxStore?.secondsLeftToCompletion}</div>
      <div className={styles["session-number"]}>Session 9</div>
      <div className={styles["control-buttons"]}>
        <button onClick={() => timerBoxStore?.discardTimer()}>Discard</button>
        <button onClick={() => timerBoxStore?.toggleTimer()}>start/stop</button>
        <button>Skip</button>
      </div>
    </div>
  );
};

export default observer(TimerBox);
