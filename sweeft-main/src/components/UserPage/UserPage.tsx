import styles from "./userPage.module.css";
import UserList from "../UserList/UserList";
import UserInfo from "../UserInfo/UserInfo";
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import Loading from "../Loading/Loading";
import Store from "../../misc/Store";
import { FullUserData } from "../../misc/apiTypeDefs";
import { useEffect, useState } from "react";
import { getFullUserData } from "../../misc/functions";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react";

export interface UserPageProps {
  store: Store,
}

const UserPage = ({ store }: UserPageProps) => {

  let { id } = useParams();
  const [userData, setUserData] = useState<FullUserData>();

  useEffect(() => {
    getFullUserData(parseInt(id?.toString() ?? "-1"))
      .then(res => setUserData(res));
  }, [id]);

  if (!userData || !userData.company || !userData.address) return <div><Loading /></div>;

  return (
    <div className={styles["main"]} >
      <div className={styles["top"]} >
        <UserInfo {...userData} />
        <BreadCrumbs store={store} />
        <h2>Friends:</h2>
      </div>
      <UserList
        userID={parseInt(id?.toString() ?? "-1")}
        friends={true}
        store={store}
      />
    </div>
  );
};

export default observer(UserPage);