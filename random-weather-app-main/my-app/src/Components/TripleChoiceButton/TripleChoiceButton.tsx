import styles from "./TripleChoiceButton.module.scss";
import { useContext } from "react";
import { StoreContext } from "../../global/StoreProvider";
import { observer } from "mobx-react";



const TripleChoiceButton = observer(() => {
  const store = useContext(StoreContext);
  const num = store.numberOfDays;
  return (
    <div className={`${styles["main"]}`} >
      <div
        onClick={() => store.setNumberOfDays(3)}
        className={`${styles[store.numberOfDays === 3 ? "main__activated-first" : "main__first"]}`} >
        3 Days
      </div>
      <div
        onClick={() => store.setNumberOfDays(7)}
        className={`${styles[store.numberOfDays === 7 ? "main__activated-second" : "main__second"]}`} >
        7 Days
      </div>
      <div
        onClick={() => store.setNumberOfDays(14)}
        className={`${styles[store.numberOfDays === 14 ? "main__activated-third" : "main__third"]}`} >
        14 Days
      </div>
    </div>
  );
});



export default TripleChoiceButton;