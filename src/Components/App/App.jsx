import Auto from "../../Cars.json";
import Cars from "../Cars/Cars";
import Counter from "../Counter/Counter";
import ColorPicker from "../ColorPicker/ColorPicker";
import TodoList from "./../TodoList/TodoList";
import { useState } from "react";
import Modal from "../Modal/Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/*======= = 1=========*/}
      <Cars listCars={Auto} />
      {/*========= 1 ========= */}

      {/*========= 2 ========= */}
      <Counter />
      <ColorPicker />
      <TodoList />
      <button onClick={handleOpenModal}>Open Modal</button>
      {isOpen && (
        <Modal handleCloseModal={handleCloseModal}>Today is Thursday</Modal>
      )}

      {/*========= 2 ========= */}

      {/*========= 3 ========= */}
      {/*========= 3 ========= */}
    </>
  );
};

export default App;
