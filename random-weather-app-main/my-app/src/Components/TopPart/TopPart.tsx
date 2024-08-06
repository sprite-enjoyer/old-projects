import styles from "./TopPart.module.scss";
import { observer } from "mobx-react-lite";
import Button from "../Button/Button";
import TripleChoiceButton from "../TripleChoiceButton/TripleChoiceButton";
import DropDownList from "../DropDownList/DropDownList";

const TopPart = observer(() => {


  return (
    <div className={`${styles["main"]}`} >
      <div className={`${styles["main__dropDown"]}`} >
        <DropDownList />
      </div>
      <div className={`${styles["main__tripleButton"]}`} >
        <TripleChoiceButton />
      </div>
      <div className={`${styles["main__btn"]}`} >
        <Button />
      </div>
    </div>
  )
});





export default TopPart; 