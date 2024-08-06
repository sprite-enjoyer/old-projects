import styles from "./WeatherCard.module.scss";
import { getRandomTemperature, getRandomWeather } from "../../global/functions";
import Temperature from "./Temperature";
import React, { useContext } from "react";
import { observer } from "mobx-react";
import { StoreContext } from "../../global/StoreProvider";
export type WeatherCardProps = {
  date: string;
  randomWeather: string | number;
}

const WeatherCard = observer(({ date, randomWeather }: WeatherCardProps) => {
  const bottomString: string = randomWeather.toString().replaceAll("_", " ");
  const rawTemp = getRandomTemperature();

  return (
    <div className={`${styles["main"]}`} >
      <div className={`${styles["main__top"]}`} >
        <div className={`${styles["main__top__img-wrapper"]}`} >
          <div>{date}</div>
          <img
            src={require(`../../assets/${randomWeather}.svg`)}
            alt="weather_icon" />
        </div>
      </div>
      <div className={`${styles["main__bottom"]}`} >
        <Temperature rawTemp={rawTemp} />
        <div className={`${styles["main__bottom__weatherName-wrapper"]}`}>
          <span className={`${styles["main__bottom__weatherName-wrapper__weatherName"]}`}>
            {bottomString}
          </span>
        </div>
      </div>
    </div>
  );
})

export default React.memo(WeatherCard);
