import { useState, useEffect, ChangeEventHandler } from "react";
import styles from "./HomePage.module.scss";
import Modal from "../../components/Modal/Modal";
import { useGalleryStore } from "../../common/GalleryStoreProvider";
import { observer } from "mobx-react";
import Gallery from "../../components/Gallery/Gallery";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [timeoutID, setTimeoutID] = useState(-1);
  const galleryStore = useGalleryStore();

  useEffect(() => {
    galleryStore.makeDummyRequest();
  }, []);

  const handleInputValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    clearTimeout(timeoutID);
    const timeout = setTimeout(() => {
      setSearchText(e.target.value);
      galleryStore.makeSearchRequest(searchText, 1);
    }, 2000);
    setTimeoutID(timeout);
  };

  return (
    <>
      <Modal closeModal={() => setModalVisible(false)} visible={modalVisible}>
        <h1>hi</h1>
      </Modal>
      <div className={styles.root}>
        <div className={styles.navigation}>
          <input onChange={handleInputValueChange} />
          <Link className={styles.link} to={"./history"}>
            History
          </Link>
        </div>
        <Gallery imagesData={searchText === "" ? galleryStore.mainPageImages : galleryStore.searchResult} />
      </div>
    </>
  );
};

export default observer(HomePage);
