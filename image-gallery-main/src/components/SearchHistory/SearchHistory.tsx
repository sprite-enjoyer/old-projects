import { useGalleryStore } from "../../common/GalleryStoreProvider";
import Chip from "../Chip/Chip";
import styles from "./SearchHistory.module.scss";

const SearchHistory = () => {
  const galleryStore = useGalleryStore();

  return (
    <div className={styles.root}>
      {[...galleryStore.history].map((searchVal) => (
        <Chip text={searchVal} />
      ))}
    </div>
  );
};

export default SearchHistory;
