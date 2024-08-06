import { useGalleryStore } from "../../common/GalleryStoreProvider";

interface ChipProps {
  text: string;
}

const Chip = ({ text }: ChipProps) => {
  const galleryStore = useGalleryStore();

  const handleClick = () => {
    galleryStore.makeSearchRequest(text, 1);
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default Chip;
