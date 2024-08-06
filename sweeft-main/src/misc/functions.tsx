import styles from "../components/UserCard/userCard.module.css";
import { ApiResponse, CoreUserData, FullUserData } from "./apiTypeDefs";

const imgLink = (base: string | undefined, i: number) => base += `?v=${i}`;

export const getFullUserData = async (userID: number) => {
  const url = `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${userID}`;
  const res: FullUserData = await fetch(url)
    .then(async response => response.json())
    .catch(error => console.error(error));
  res.imageElement =
    <img
      loading="lazy"
      className={styles["image"]}
      src={imgLink(res.imageUrl, res.id)}
      alt={`${res.prefix} ${res.name} ${res.lastName}`}
    />;
  return res;
};

export const getCoreUsers = async (page: number, size: number, friends: boolean, userID?: number) => {
  let url = "http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com";
  if (friends) url += (`/user/${userID}/friends/${page}/${size}`);
  else url += (`/user/${page}/${size}`);

  const res: ApiResponse<CoreUserData> = await fetch(url)
    .then(async response => response.json())
    .catch(error => console.error(error));


  return {
    pagination: res.pagination, list: res.list.map((item) => {
      return {
        ...item,
        imageElement:
          <img
            loading="lazy"
            src={imgLink(item.imageUrl, item.id)}
            className={styles["image"]}
            alt={`${item.prefix} ${item.name} ${item.lastName}`}
          />
      }
    })
  };
}