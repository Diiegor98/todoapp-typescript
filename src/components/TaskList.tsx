import { Task } from "./Task";

//Tipado de las propiedades que llegan.
type Props = {
  taskList: string[];
  deleteTask: (index: number) => void;
};

export const TaskList = ({ taskList, deleteTask }: Props) => {
  return <div>
    {taskList.map((task, index) => (
        <Task key={index} task={task} deleteTask={() => deleteTask(index)} />
    ))}
  </div>;
};
