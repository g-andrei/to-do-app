import { useState } from "react";
import { Button, Category, InputText, Modal, Typography } from "src/components";
import { StyledAddEventModal } from "./AddEventModal.styled";
import { useSelector } from "react-redux";
import { useAppDispatch } from "src/store";
import {
  addNewTask,
  formStatus,
  openAddEventModal,
  updateAddTaskButton,
  updateErrorInput,
} from "src/slices";
import spacings from "src/themes/spacings";

const AddEvent = () => {
  const dispatch = useAppDispatch();
  const { buttonStatus, errorInput } = useSelector(formStatus);

  const [task, setTask] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const randomId = () => crypto.randomUUID();

  const newTask = () => ({
    id: randomId(),
    task,
    status: selectedCategory,
  });

  const handleTextChange = (value: string) => {
    const hasValue = value !== "";
    dispatch(updateAddTaskButton(!hasValue));
    dispatch(updateErrorInput(!hasValue));
  };

  const handleSubmit = () => {
    if (selectedCategory) {
      dispatch(addNewTask(newTask()));
      dispatch(updateAddTaskButton(true));
      setTask("");
      setSelectedCategory("");
      dispatch(openAddEventModal(false));
    } else {
      alert("Please select a category");
      return false;
    }
  };

  const categorys = [
    { category: "Urgent" },
    { category: "Important" },
    { category: "Later" },
    { category: "To Study" },
  ];

  return (
    <StyledAddEventModal>
      <Modal>
        <Typography
          variant="paragraph"
          style={{
            textAlign: "center",
            textTransform: "uppercase",
            margin: `${spacings.main.s22} 0 ${spacings.main.s18} `,
          }}
        >
          create tesk
        </Typography>
        <form>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <InputText
              value={task}
              placeholder="Task description..."
              errorState={errorInput}
              onChange={(text) => {
                setTask(text.target.value);
                handleTextChange(text.target.value);
              }}
            />
            <Typography variant="paragraph" style={{ margin: "36px 0 30px" }}>
              Categories
            </Typography>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                margin: "32px 36px 54px",
                gap: "20px",
              }}
            >
              {categorys.map((categoryItem) => (
                <Category
                  key={categoryItem.category}
                  variant={categoryItem.category}
                  categoryText={categoryItem.category}
                  onClick={() => setSelectedCategory(categoryItem.category)}
                  isSelected={selectedCategory === categoryItem.category}
                />
              ))}
            </div>
            <Button
              type="submit"
              onClick={handleSubmit}
              disabled={buttonStatus}
            >
              SUBMIT TASK
            </Button>
          </div>
        </form>
      </Modal>
    </StyledAddEventModal>
  );
};

export default AddEvent;
