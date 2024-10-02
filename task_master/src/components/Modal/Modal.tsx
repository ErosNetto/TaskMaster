import React from "react";

import styles from "./Modal.module.css";

interface Props {
  childrean: React.ReactNode;
}

const Modal = ({ childrean }: Props) => {
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector("#modal");
    modal!.classList.add("hide");
  };

  return (
    <div id="modal" className="hide">
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <h2>Editar tarefa</h2>
        {childrean}
      </div>
    </div>
  );
};

export default Modal;
