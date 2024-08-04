import React from "react";
import styles from "./stylesheader.module.scss";
import { InfoCards } from "../InfoCards/Infocards";

export const Header: React.FC = () => {
  return (
    <header className={styles.cabeca}>
      <div className={styles.container}>
        <div>
          <h1>Minha lista</h1>
          <span>Bem vindo, usuário!</span>
        </div>

        <div>
          <InfoCards title="Total de Tarefas" value={5} />
          <InfoCards title="Tarefas Pendentes" value={4} />
          <InfoCards title="Tarefas Concluidas" value={3} />
        </div>
      </div>
    </header>
  );
};
