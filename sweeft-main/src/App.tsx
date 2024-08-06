import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./app.module.css";
import UserList from "./components/UserList/UserList";
import UserPage from "./components/UserPage/UserPage";
import Store from "./misc/Store";

export type BreadCrumbData = { id: string, fullName: string };

const App = () => {
  const store = new Store();

  return (
    <div className={styles["main"]} >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <UserList
                friends={false}
                store={store}
              />
            } />
          <Route
            path="/user/:id"
            element={
              <UserPage
                store={store}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
