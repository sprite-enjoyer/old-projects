import styles from "./userInfo.module.css";
import { FullUserData } from "../../misc/apiTypeDefs";

const UserInfo = ({
  jobArea,
  jobType,
  ip,
  email,
  address,
  company,
  name,
  lastName,
  prefix,
  title,
  imageElement,
}: FullUserData) => {

  return (
    <div className={styles["main"]} >
      <div className={styles["image-container"]} >
        {imageElement}
      </div>
      <div className={styles["info"]} >
        <span className={styles["border-text-info"]} >Info</span>
        <div className={styles["info__top"]} >
          <strong className={styles["full-name"]} >
            {`${prefix} ${name} ${lastName}`}
          </strong>
          <span className={styles["title"]} >
            {title}
          </span>
        </div>
        <div className={styles["info__bot"]} >
          <span><u>Email</u>: {email}</span>
          <span><u>IP Address</u>: {ip}</span>
          <span><u>IP Address</u>: {ip}</span>
          <span><u>Job Area</u>: {jobArea}</span>
          <span><u>Job Type</u>: {jobType}</span>
        </div>
      </div>
      <div className={styles["address"]} >
        <span className={styles["border-text-address"]} >Address</span>
        <strong className={styles["address-title"]} >
          {`${company.name} ${company.suffix}`}
        </strong>
        <span><u>City</u>: {address.city}</span>
        <span><u>Country</u>: {address.country}</span>
        <span><u>State</u>: {address.state}</span>
        <span><u>Street Address</u>: {address.streetAddress}</span>
        <span><u>ZIP</u>: {address.zipCode}</span>
      </div>
    </div>
  );
};

export default UserInfo;