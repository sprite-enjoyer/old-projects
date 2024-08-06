import styles from "./MainPanel.module.scss";
import React from "react";

export type MainPanelProps = {
  children: React.ReactNode;
};

const MainPanel = ({ children }: MainPanelProps) => {
  return (
    <div className={`${styles["main"]}`} >
      {children}
    </div>
  );
};




export default React.memo(MainPanel);