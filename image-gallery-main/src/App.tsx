import MyRouterProvider from "./pages/MyRouterProvider";
import UnsplashApiManagerProvider from "./common/UnsplashApiManagerProvider";
import styles from "./App.module.scss";
import GalleryStoreProvider from "./common/GalleryStoreProvider";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className={styles.app}>
      <UnsplashApiManagerProvider>
        <GalleryStoreProvider>
          <MyRouterProvider />
        </GalleryStoreProvider>
      </UnsplashApiManagerProvider>
    </div>
  );
};

export default App;
