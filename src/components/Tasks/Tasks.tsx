// importações
import React, { FormEvent, useState } from "react";
import styles from "./styletask.module.scss";

// array
interface Task {
  title: string;
  done: boolean;
  id: number;
}

export const Tasks: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState([] as Task[]);

  // função de disparo quando user tenta add nova tarefa
  function handleSubmitAddtask(event: FormEvent) {
    event.preventDefault();

    if (taskTitle.length < 2) {
      alert("Não e possivel adicionar tarefas com nenos de 2 caracteres!!");
      return;
    }

    // add tasks
    setTasks([
      ...tasks, //pegando as tarefas ja existentes e colocando no novo valor de estado da tarefas
      { id: new Date().getTime(), title: taskTitle, done: false },
    ]);
    setTaskTitle("");
  }

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmitAddtask}>
        <div>
          <label htmlFor="task-title">Adicionar Tarefa</label>
          <input
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
            type="text"
            id="task-title"
            placeholder="Título"
          />
        </div>
        <button type="submit">Adicionar tarefa</button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <input type="checkbox" id={`task-${task.id}`} />
              <label htmlFor={`task-${task.id}`}>{task.title}</label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
