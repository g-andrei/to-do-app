import { useAppDispatch } from "src/store";
import { Category, CheckButton, Icon, Typography } from "..";
import { StyledTask } from "./Task.styled";
import { endTask } from "src/slices";
import { Check } from "src/assets/icons";
import colors from "src/themes/colors";

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
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <CheckButton
          onClick={() => {
            dispatch(endTask(id));
          }}
        >
          <Icon IconComponent={Check} color={colors.white} />
        </CheckButton>
        <Typography variant="paragraph">{task}</Typography>
      </div>
      <Category variant={variant} categoryText={categoryText} />
    </StyledTask>
  );
};

export default Task;
