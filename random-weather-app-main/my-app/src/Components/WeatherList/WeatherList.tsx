import styles from "./WeatherList.module.scss";
import { observer } from "mobx-react-lite";
import WeatherCard from "../WeatherCard/WeatherCard";
import { useContext } from "react";
import { StoreContext } from "../../global/StoreProvider";

const WeatherList = observer(() => {
  const store = useContext(StoreContext);
  const numbersArr = Array.from(Array(store.numberOfDays).keys());
  const temperatureArr = store.temperatureList;
  const weatherArr = store.weatherList;
  // const date = new Date();
  // const day = date.getDate().toString();
  // const month = (date.getMonth() + 1).toString();
  //day + " / " + month

  return (
    <div className={`${styles["main"]}`}>
      {
        numbersArr.map((number) =>
          <WeatherCard
            randomWeather={store.weatherList[number]}
            date="date TODO" key={number} />)
      }
    </div >
  );
});


export default WeatherList;
