import styles from "./Card1.module.css";

const Card1 = () => {
  return (
    <div className={styles.cardContainer}>
      <h1 id={styles.title}>Card 1</h1>
      <p>ini Body card 1</p>
    </div>
  );
};

export default Card1;
