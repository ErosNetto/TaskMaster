import React from "react";

import styles from "./Modal.module.css";

interface Props {
  children: React.ReactNode;
}

const Modal = ({ children }: Props) => {
  const closeModal = (): void => {
    const modal = document.querySelector("#modal");
    if (modal) {
      modal.classList.add("hide");
    }
  };

  return (
    <div id="modal" className="hide">
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <h2>Editar tarefa</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
