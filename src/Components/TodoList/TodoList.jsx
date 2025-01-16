import { useState } from "react";
import TodoItem from "./TodoItem/TodoItem";
import s from "./TodoList.module.css";
import TodosData from "./Todos.json";

const TodoList = () => {
  const [todos, setTodos] = useState(TodosData);
  const [newValue, setNewValue] = useState("");

  const hendleDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const handleAdd = () => {
    if (!newValue) return;

    const newObj = {
      id: crypto.randomUUID(),
      task: newValue,
    };
    setTodos((prev) => [...prev, newObj]);
    setNewValue("");
  };

  return (
    <div className={s.wraper}>
      <div className={s.flex}>
        <input
          className={s.input}
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          type="text"
        />
        <button className={s.buttonAdd} onClick={handleAdd}>
          Add
        </button>
      </div>
      <ul className={s.list}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} hendleDelete={hendleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
