import React from "react";
import "../src/global/App.scss";
import MainPanel from './Components/MainPanel/MainPanel';
import WeatherList from './Components/WeatherList/WeatherList';
import { StoreProvider } from './global/StoreProvider';
import DropDownList from "./Components/DropDownList/DropDownList";
import TopPart from "./Components/TopPart/TopPart";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <MainPanel>
          <TopPart />
          <WeatherList />
        </MainPanel>
      </StoreProvider>
    </div>
  );
};


export default React.memo(App);
