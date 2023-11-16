import { useEffect, useState } from "react";
import Theme from "./themes";
import { Button, InputText, Typography } from "./components";
import Header from "./features/views/Header/Header";
import { Body } from "./features/views";
import { useSelector } from "react-redux";
import {
  addNewTask,
  getTasks,
  formStatus,
  updateAddTaskButton,
  updateErrorInput,
} from "./slices";
import { useAppDispatch } from "./store";

function App() {
  const dispatch = useAppDispatch();
  const { buttonStatus, errorInput } = useSelector(formStatus);
  const [task, setTask] = useState("");
  const randomId = crypto.randomUUID();

  const newTask = () => {
    const nextTask = {
      id: randomId,
      task: task,
      status: "Later",
    };
    return nextTask;
  };

  const handleTextChange = (value: string) => {
    if (value !== "") {
      dispatch(updateAddTaskButton(false));
      dispatch(updateErrorInput(false));
    } else {
      dispatch(updateAddTaskButton(true));
      dispatch(updateErrorInput(true));
    }
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")!) || [];
    dispatch(getTasks({ data: todos }));
  }, [dispatch]);

  return (
    <Theme>
      <div style={{ margin: "50vh auto 0", transform: "translateY(-50%)" }}>
        <div
          style={{
            gap: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="title">PERSONAL TASK MANAGER</Typography>

          <InputText
            value={task}
            placeholder="Task description..."
            errorState={errorInput}
            onChange={(text) => {
              setTask(text.target.value);
              handleTextChange(text.target.value);
            }}
          />
          <Button
            onClick={() => {
              dispatch(addNewTask(newTask()));
              dispatch(updateAddTaskButton(true));
              setTask("");
            }}
            disabled={buttonStatus}
          >
            +
          </Button>

          <Header />
          <Body />
          <Typography variant="paragraph">
            This project is still in progress! Thank you for understanding.
          </Typography>
        </div>
      </div>
    </Theme>
  );
}

export default App;
