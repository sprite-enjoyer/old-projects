import { useEffect, useRef } from "react";
import styles from "./userList.module.css";
import UserCard from "../UserCard/UserCard";
import useScroll from "../../misc/useScroll";
import Loading from "../Loading/Loading";
import Store from "../../misc/Store";
import { observer } from "mobx-react";

export interface UserListProps {
  friends: boolean,
  userID?: number,
  store: Store
}

const UserList = ({ friends, userID, store }: UserListProps) => {

  const lastElementRef = useRef<HTMLDivElement>(null);
  const users = useScroll({ friends, userID, lastElementRef });

  useEffect(() => { store.setUserList(users); }, [users, store]);

  return (
    <div style={friends ? {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      alignSelf: "center",
      paddingLeft: "10px",
      paddingRight: "10px",
      borderLeft: "1px solid black",
      borderRight: "1px solid black",
    } : {
      width: "100vw",
      height: "100%",
      overflow: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: 'relative',
    }}>
      <div className={styles["grid"]} >
        {users.map(user => <UserCard store={store} key={user.id} {...user} />)}
      </div>
      <div ref={lastElementRef}>
        <Loading />
      </div>
    </div>
  );
};


export default observer(UserList);
