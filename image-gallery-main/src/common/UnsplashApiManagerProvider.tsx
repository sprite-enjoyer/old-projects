import UnsplashApiManager from "./UnsplashApiManager";
import { ReactNode, createContext, useContext } from "react";

const UnsplashApiManagerContext = createContext<UnsplashApiManager | undefined>(undefined);

const unsplashApiManager = new UnsplashApiManager();

const UnsplashApiManagerProvider = ({ children }: { children: ReactNode }) => {
  return <UnsplashApiManagerContext.Provider value={unsplashApiManager}>{children}</UnsplashApiManagerContext.Provider>;
};

export const useUnsplashApiManager = () => {
  const unsplashApiManager = useContext(UnsplashApiManagerContext);
  if (!unsplashApiManager) throw new Error("use this hook under the provider");
  return unsplashApiManager;
};

export default UnsplashApiManagerProvider;
