import { Link } from "react-router-dom";
import { CoreUserData } from "../../misc/apiTypeDefs";
import Store from "../../misc/Store";
import styles from "./userCard.module.css";

interface UserCardProps extends CoreUserData {
  divRef?: React.RefObject<HTMLDivElement>,
  store: Store
}

const UserCard = ({ id, name, lastName, prefix, title, divRef, imageElement, store }: UserCardProps) => {

  const handleClick = () => {
    store.setFromLink(false);
    if (id && !store.fromLink) {
      store.setBreadCrumbs([...store.breadCrumbs, { id: id.toString(), fullName: `${prefix} ${name} ${lastName}` }]);
    }
  };

  return (
    <Link onClick={handleClick} className={styles["wrapper-link"]} to={`/user/${id}`}>
      <div ref={divRef} className={styles["main"]} >
        <div className={styles["top"]} >
          {imageElement}
        </div>
        <div className={styles["bottom"]} >
          <strong className={styles["full-name"]} >
            {`${prefix} ${name} ${lastName}`}
          </strong>
          <span className={styles["title"]} >
            {title}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;