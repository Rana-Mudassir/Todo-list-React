import styles from '../styles/TodoItem.module.css';
/* eslint-disable */


const TodoItem = ({ itemProp, handleChange, delTodo }) => (
  <li className={styles.item}>

    <div className={styles.content}>
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
        className={styles.textInput}
      />

      <button type="button" onClick={() => delTodo(itemProp.id)}>Delete</button>
      {itemProp.title}
    </div>
  </li>
);
export default TodoItem;
/* eslint-enable */
