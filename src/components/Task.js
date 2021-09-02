const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <button onClick={() => onDelete(task.id)}>DELETE</button>
    </div>
  );
};

export default Task;
