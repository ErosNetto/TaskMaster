import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

// Css
import styles from "./TaskForm.module.css";

// Interface
import { ITask } from "../../interfaces/Task";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, difficulty: number | null): void;
}

const TaskForm = ({
  btnText,
  taskList,
  setTaskList,
  task,
  handleUpdate,
}: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number | null>(null);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  const addTasHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      handleUpdate(id, title, difficulty);
    } else {
      const id = Math.floor(Math.random() * 1000);
      const newTask: ITask = { id, title, difficulty };

      setTaskList!([...taskList, newTask]);

      setTitle("");
      setDifficulty(null);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      const value = e.target.value;
      setDifficulty(value === "" ? null : parseInt(value));
    }
  };

  return (
    <form onSubmit={addTasHandler} className={styles.form}>
      <div className={styles.input_container}>
        <div className={styles.input_group}>
          <input
            required
            type="text"
            name="title"
            autoComplete="off"
            className="input"
            onChange={handleChange}
            value={title}
          />
          <label>Título</label>
        </div>

        <div className={styles.input_group}>
          <input
            required
            type="number"
            name="difficulty"
            autoComplete="off"
            className="input"
            onChange={handleChange}
            value={difficulty !== null ? difficulty.toString() : ""}
            min={0}
          />
          <label>Dificuldade</label>
        </div>
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
