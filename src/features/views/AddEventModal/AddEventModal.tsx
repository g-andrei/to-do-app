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
    dispatch(addNewTask(newTask()));
    dispatch(updateAddTaskButton(true));
    setTask("");
    setSelectedCategory("");
    dispatch(openAddEventModal(false));
  };

  const categories = [
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
            margin: `${spacings.main.s22} 0 ${spacings.main.s18}`,
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
              {categories.map((categoryItem) => (
                <Category
                  key={categoryItem.category}
                  variant={categoryItem.category}
                  categoryText={categoryItem.category}
                  onClick={() => setSelectedCategory(categoryItem.category)}
                  isSelected={selectedCategory === categoryItem.category}
                />
              ))}
            </div>
            <div style={{ display: "flex" }}>
              <Button
                type="submit"
                onClick={handleSubmit}
                disabled={buttonStatus || !selectedCategory}
              >
                SUBMIT TASK
              </Button>
              <Button
                variant="secondary"
                onClick={() => dispatch(openAddEventModal(false))}
              >
                CANCEL
              </Button>
            </div>
          </div>
        </form>
      </Modal>
    </StyledAddEventModal>
  );
};

export default AddEvent;
