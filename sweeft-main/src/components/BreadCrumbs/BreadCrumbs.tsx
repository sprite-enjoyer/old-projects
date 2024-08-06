import styles from "./breadCrumbs.module.css";
import { Link } from "react-router-dom";
import Store from "../../misc/Store";
import { observer } from "mobx-react";

export interface BreadCrumbsProps {
  store: Store
}

const BreadCrumbs = ({ store }: BreadCrumbsProps) => {

  return (
    <div className={styles["main"]} >
      {store.breadCrumbs.map((dataPiece, i) =>
        <>
          <Link
            key={i}
            to={`/user/${dataPiece.id}`}>
            {dataPiece.fullName}
          </Link>
          <span key={-i}>{">"}</span>
        </>
      )}
    </div>
  );
};

export default observer(BreadCrumbs);