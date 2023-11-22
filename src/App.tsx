import { useEffect } from "react";
import Theme from "./themes";
import { Typography } from "./components";
import Header from "./features/views/Header/Header";
import { Body } from "./features/views";
import { useSelector } from "react-redux";
import { getTasks, formStatus } from "./slices";
import { useAppDispatch } from "./store";
import AddEvent from "./features/views/AddEventModal/AddEventModal";

function App() {
  const dispatch = useAppDispatch();
  const { isAddEventModalOpend } = useSelector(formStatus);
  // console.log(isAddEventModalOpend);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")!) || [];
    dispatch(getTasks({ data: todos }));
  }, [dispatch]);

  return (
    <Theme>
      <div
        style={{
          display: "grid",
          backgroundColor: isAddEventModalOpend ? "#0e141e" : "#1C273C",
        }}
      >
        {isAddEventModalOpend && <AddEvent />}

        <div
          style={{
            margin: "50vh auto 0",
            transform: "translateY(-50%)",
            filter: isAddEventModalOpend ? "blur(4px)" : "blur(0)",
            gap: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="title" style={{ textTransform: "uppercase" }}>
            personal task manager
          </Typography>

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
