import { createContext, ReactNode } from "react";
import store from "./Store";

export const StoreContext = createContext(store);

type StoreProviderProps = {
  children: ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps) =>
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>