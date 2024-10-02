import React from "react";

// Interfaces
import { ITask } from "../../interfaces/Task";

// Css
import styles from "./TaskList.module.css";

interface Props {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask): void;
}

function TaskList({ taskList, handleDelete, handleEdit }: Props) {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>

            <div className={styles.actions}>
              <i
                className={`bi bi-pencil ${styles.editIcon}`}
                onClick={() => handleEdit(task)}
              ></i>
              <i
                className={`bi bi-trash ${styles.deleteIcon}`}
                onClick={() => handleDelete(task.id)}
              ></i>
            </div>
          </div>
        ))
      ) : (
        <p className={styles.notTasks}>Não há tarefas cadastradas</p>
      )}
    </>
  );
}

export default TaskList;
