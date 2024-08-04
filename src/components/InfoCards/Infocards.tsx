import React from "react";
import styles from "./stylescards.module.scss";

interface StatsCardProps {
  title: string;
  value: number;
}

export const InfoCards: React.FC<StatsCardProps> = ({ title, value }) => {
  return (
    <article className={styles.info_cards}>
      <h2>{title}</h2>
      <span>{value}</span>
    </article>
  );
};
