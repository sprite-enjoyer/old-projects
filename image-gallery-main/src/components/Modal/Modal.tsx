import { ReactNode } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
  children: ReactNode;
  visible: boolean;
  closeModal: () => void;
}

const Modal = ({ children, visible, closeModal }: ModalProps) => {
  if (!visible) return null;
  return (
    <div className={styles.background}>
      <dialog open={visible} className={styles.dialog}>
        <div className={styles["modal-header"]}>
          <button onClick={closeModal} className={styles["close-button"]}>
            X
          </button>
        </div>
        {children}
      </dialog>
    </div>
  );
};

export default Modal;
