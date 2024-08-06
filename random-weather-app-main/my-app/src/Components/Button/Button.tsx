import styles from "./Button.module.scss";
import { observer } from "mobx-react";
import { useContext } from "react";
import { StoreContext } from "../../global/StoreProvider";
import React from "react";

const Button = observer(() => {
  const store = useContext(StoreContext);

  return (
    <div className={`${styles["main"]}`} >
      <label className={`${styles["main__lbl"]}`} >
        {store.celsius ? "Celsius" : "Fahrenheit"}
      </label>
      <div className={`${styles["main__checkbox-wrapper"]}`}>
        <input
          className={`${styles["main__checkbox-wrapper__switch"]}`}
          type="checkbox"
          id={`${styles["toggle"]}`}
          onChange={store.changeTemperatureUnit}
        />
      </div>

    </div>
  );
});


export default React.memo(Button);