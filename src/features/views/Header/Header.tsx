import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Typography } from "src/components";
import { clearTasks, taskLength } from "src/slices/task.slice";
import colors from "src/themes/colors";
import { StyledContainer } from "./Header.styled";

const Header = () => {
  const taskLengthh = useSelector(taskLength);
  const dispatch = useDispatch();

  return (
    <Card>
      <StyledContainer>
        <Typography
          variant="paragraph"
          style={{ color: colors.text.secondary }}
        >
          {taskLengthh} {taskLengthh > 1 ? "tasks" : "task"}
        </Typography>
        <Button>Add new task</Button>
        <Button variant="secondary" onClick={() => dispatch(clearTasks())}>
          Clear completed
        </Button>
      </StyledContainer>
    </Card>
  );
};

export default Header;
