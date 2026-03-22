function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li
      style={{
        display: "flex",
        gap: "10px",
        padding: "8px",
        borderBottom: "1px solid #eee",
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <span
        style={{
          flex: 1,
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.text}
      </span>

      <button onClick={() => onDelete(task.id)}>Удалить</button>
    </li>
  );
}

export default TodoItem;
