import { useSelector } from "react-redux";
import { useAppDispatch } from "src/store";
import { Button, Card, Typography } from "src/components";
import {
  clearCompletedTasks,
  completedTaskLength,
  deleteAllTasks,
  openAddEventModal,
  taskLength,
} from "src/slices";
import colors from "src/themes/colors";
import { StyledContainer } from "./Header.styled";

const Header = () => {
  const lengthOfTasks = useSelector(taskLength);
  const lengthOfCompletedTasks = useSelector(completedTaskLength);
  const dispatch = useAppDispatch();

  return (
    <Card>
      <StyledContainer>
        <Typography
          variant="paragraph"
          style={{ color: colors.text.secondary }}
        >
          {lengthOfTasks} {lengthOfTasks === 1 ? "task" : "tasks"}
        </Typography>
        <Button onClick={() => dispatch(openAddEventModal(true))}>
          Add new task
        </Button>
        <Button
          variant="secondary"
          onClick={() => dispatch(clearCompletedTasks())}
          disabled={lengthOfCompletedTasks === 0 ? true : false}
        >
          Clear completed
        </Button>
        <Button
          variant="secondary"
          onClick={() => dispatch(deleteAllTasks())}
          disabled={lengthOfTasks === 0 ? true : false}
        >
          Clear all tasks
        </Button>
      </StyledContainer>
    </Card>
  );
};

export default Header;
