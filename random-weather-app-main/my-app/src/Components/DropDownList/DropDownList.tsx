import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { getCities, getTemperatureArray, getWeatherArray } from "../../global/functions";
import { StoreContext } from "../../global/StoreProvider";
import styles from "./DropDownList.module.scss";
import { v4 } from "uuid";

const DropDownList = observer(() => {
  const store = useContext(StoreContext);
  const cities = getCities();


  return (
    <div className={`${styles["main"]}`} >
      <button
        className={`${styles["main__btn"]}`}
        onClick={store.changeCityListShown} >
        Cities
      </button>
      <div className={`${styles["main__list"]}`} >
        {store.cityListShown &&
          cities.map((city) =>
            <div
              onClick={
                () => {
                  store.changeWeatherList(getWeatherArray(14));
                  store.changeTemperatureList(getTemperatureArray(14));
                }
              }
              key={v4()}
              className={`${styles["main__list__list-item"]}`}
            >
              {city}
            </div>)
        }
      </div>
    </div >
  );
});





export default React.memo(DropDownList);