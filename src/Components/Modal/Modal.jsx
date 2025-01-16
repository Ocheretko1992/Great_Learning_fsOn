import { useEffect } from "react";
import s from "./Modal.module.css";

const Modal = ({ children, handleCloseModal }) => {
  const handleBackdropClose = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  useEffect(() => {
    const hendelKeyDoun = (e) => {
      console.log(e.key);
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };
    document.addEventListener("keydown", hendelKeyDoun);

    return () => {
      console.log("Мене закрили");
      document.removeEventListener("keydown", hendelKeyDoun);
    };
  }, [handleCloseModal]);

  return (
    <div onClick={handleBackdropClose} className={s.wraper}>
      <div className={s.modalWraper}>
        <div className={s.buttonWraper}>
          <button onClick={handleCloseModal} className={s.button}>
            X
          </button>
        </div>
        <h1>My Modal</h1>
        <hr className={s.hr} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
