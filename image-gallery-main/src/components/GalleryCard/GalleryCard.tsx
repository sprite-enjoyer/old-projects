import { UnsplashImage } from "../../common/types";
import styles from "./GalleryCard.module.scss";

interface GalleryCardProps {
  data: UnsplashImage;
}

const GalleryCard = ({ data }: GalleryCardProps) => {
  const handleClick = () => {};

  return (
    <div className={styles.root} onClick={handleClick}>
      <img className={styles.image} src={data.urls.thumb} />
    </div>
  );
};

export default GalleryCard;
