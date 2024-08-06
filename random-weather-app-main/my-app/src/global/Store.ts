import { action, makeAutoObservable, observable, reaction } from "mobx";
import { getTemperatureArray, getWeatherArray } from "./functions";

export class StoreImpl {

  selectedCity: string = "";
  cityListShown: boolean = false;
  numberOfDays: number = 3;
  celsius: boolean = true;
  weatherList: Array<string> = observable.array(getWeatherArray(14));
  temperatureList: Array<number> = observable.array(getTemperatureArray(14));

  changeTemperatureUnit = action(() => this.celsius = !this.celsius);
  changeCityListShown = action(() => this.cityListShown = !this.cityListShown);
  setNumberOfDays = action((dayNum: number) => this.numberOfDays = dayNum);
  setSelectedCity = action((city: string) => this.selectedCity = city);
  changeWeatherList = action((weatherList: Array<string>) => this.weatherList = weatherList);
  changeTemperatureList = action((temperatureList: Array<number>) => this.temperatureList = temperatureList);



  constructor() { makeAutoObservable(this); }
}

const store = new StoreImpl();
export default store;

