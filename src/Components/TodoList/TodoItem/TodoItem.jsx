import s from "./TodoItem.module.css";

const TodoItem = ({ id, completed, task, hendleDelete }) => {
  return (
    <li key={id} className={s.wraper}>
      <input className={s.checkBox} type="checkbox" />
      <p className={s.task}>{task}</p>
      <span>{completed}</span>
      <button onClick={() => hendleDelete(id)} className={s.buttonDelete}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
