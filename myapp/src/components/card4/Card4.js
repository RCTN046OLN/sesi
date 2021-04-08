import { css } from "@emotion/css";

const styles = {
  wrapper: {
    backgroundColor: "blue",
    padding: "10px",
    marginBottom: "10px",
  },
  title: {
    fontSize: "50px",
    color: "pink",
  },
};

const Card4 = () => {
  return (
    <div className={css(styles.wrapper)}>
      <h1 className={css(styles.title)}>Card 4</h1>
      <p>Ini card 4</p>
    </div>
  );
};

export default Card4;
