
//@ts-ignore
import styles from "./WeatherCard.module.scss";
import { temperatureConverter } from "../../global/functions";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { StoreContext } from "../../global/StoreProvider";

type TemperatureProps = {
  rawTemp: number;
}

const Temperature = observer(({ rawTemp }: TemperatureProps) => {
  const store = useContext(StoreContext);
  const temperature = store.celsius ? rawTemp : temperatureConverter(rawTemp);

  return (
    <div className={`${styles["main__bottom__temperature-wrapper"]}`}>
      <span className={`${styles["main__bottom__temperature-wrapper__temperature"]}`}>
        {temperature} {store.celsius ? "°C" : "°F"}
      </span>
    </div>
  );
});


export default Temperature;