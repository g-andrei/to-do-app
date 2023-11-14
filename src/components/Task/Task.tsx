import { useDispatch } from "react-redux";
import { Category, Typography } from "..";
import { StyledTask } from "./Task.styled";
import { completeTask } from "../../slices/task.slice";

interface TaskProps {
  id: number;
  task: string;
  variant: string;
  categoryText: string;
}

const Task = ({ id, task, variant, categoryText }: TaskProps) => {
  const dispatch = useDispatch();

  return (
    <StyledTask>
      <div style={{ display: "flex", alignContent: "center", gap: "12px" }}>
        <button
          style={{ width: "30px", height: "30px", backgroundColor: "green" }}
          onClick={() => {
            dispatch(completeTask({ id: id }));
            console.log(id);
          }}
        />
        <Typography variant="paragraph">{task}</Typography>
      </div>
      <Category variant={variant} categoryText={categoryText} />
    </StyledTask>
  );
};

export default Task;
