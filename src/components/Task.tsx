type Props = {
  task: string;
  deleteTask: () => void;
};

export const Task = ({ task, deleteTask }: Props) => {
  return <div>
    <span>{task}</span>
    <button onClick={deleteTask}>X</button>
  </div>;
};
