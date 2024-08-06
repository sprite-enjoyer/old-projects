import { Link } from "react-router-dom";
import SearchHistory from "../../components/SearchHistory/SearchHistory";
import styles from "./HistoryPage.module.scss";

const HistoryPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Link to={"/"}>Home</Link>
      </div>
      <SearchHistory />
    </div>
  );
};

export default HistoryPage;
