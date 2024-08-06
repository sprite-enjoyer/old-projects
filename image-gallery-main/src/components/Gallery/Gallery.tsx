import styles from "./Gallery.module.scss";
import { UnsplashImage } from "../../common/types";
import GalleryCard from "../GalleryCard/GalleryCard";
import { toJS } from "mobx";

interface GalleryProps {
  imagesData: UnsplashImage[];
}

const Gallery = ({ imagesData }: GalleryProps) => {
  console.log(toJS(imagesData));
  return (
    <div className={styles.root}>
      {imagesData.map((data) => (
        <GalleryCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Gallery;
