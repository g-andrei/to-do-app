import { useAppDispatch } from "src/store";
import { Category, Typography } from "..";
import { StyledTask } from "./Task.styled";
import { endTask } from "src/slices";

interface TaskProps {
  id: string;
  task: string;
  variant: string;
  categoryText: string;
}

const Task = ({ id, task, variant, categoryText }: TaskProps) => {
  const dispatch = useAppDispatch();

  return (
    <StyledTask>
      <div style={{ display: "flex", alignContent: "center", gap: "12px" }}>
        <button
          style={{ width: "30px", height: "30px", backgroundColor: "green" }}
          onClick={() => {
            dispatch(endTask(id));
          }}
        />
        <Typography variant="paragraph">{task}</Typography>
      </div>
      <Category variant={variant} categoryText={categoryText} />
    </StyledTask>
  );
};

export default Task;
