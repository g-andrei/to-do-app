import { useSelector } from "react-redux";
import { useAppDispatch } from "src/store";
import { Button, Card, Typography } from "src/components";
import { deleteAllTasks, taskLength } from "src/slices";
import colors from "src/themes/colors";
import { StyledContainer } from "./Header.styled";

const Header = () => {
  const taskLengthh = useSelector(taskLength);
  const dispatch = useAppDispatch();

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
        <Button variant="secondary" onClick={() => dispatch(deleteAllTasks())}>
          Clear completed
        </Button>
      </StyledContainer>
    </Card>
  );
};

export default Header;
