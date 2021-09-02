const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3>{task.text}</h3>
      <p>{task.day}</p>
      <button onClick={() => onToggle(task.id)}>complete</button>
      <button onClick={() => onDelete(task.id)}>DELETE</button>
    </div>
  );
};

export default Task;
