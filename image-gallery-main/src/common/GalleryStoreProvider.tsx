import { ReactNode, createContext, useContext } from "react";
import GalleryStore from "./GalleryStore";

const GalleryStoreContext = createContext<GalleryStore | undefined>(undefined);

const GalleryStoreProvider = ({ children }: { children: ReactNode }) => {
  const galleryStore = new GalleryStore();
  return <GalleryStoreContext.Provider value={galleryStore}>{children}</GalleryStoreContext.Provider>;
};

export const useGalleryStore = () => {
  const galleryStore = useContext(GalleryStoreContext);
  if (!galleryStore) throw new Error("this hook should be used under its provider!");
  return galleryStore;
};

export default GalleryStoreProvider;
