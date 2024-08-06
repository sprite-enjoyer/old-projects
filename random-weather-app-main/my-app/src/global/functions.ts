import { weather } from "./types";
import * as data from "../Data/db";

export const temperatureConverter = (c: number) => Math.floor((c * 1.8) + 32);

export function* getRandomWeather(): Generator<string, string, string> {
  while (true) {
    let randWeather = data.weathers[Math.floor(Math.random() * 9)];
    yield randWeather;
  }
};

export const getWeatherArray = (len: number) => {
  let result: Array<string> = [];
  while (result.length < len) result.push(getRandomWeather().next().value);
  return result;
};

export const getTemperatureArray = (len: number) => {
  let result: Array<number> = [];
  while (result.length < len) result.push(getRandomTemperature());
  return result;
}

export const getRandomTemperature = () => Math.floor((Math.random() - 0.5) * 90);
export const getCities = (): Array<string> => data.cities;
