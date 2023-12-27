import styles from "./SingleCard.module.css";

const SingleCard = ({ joke }) => {
  return (
    <div className={styles.container}>
      <p className={styles.vinieta}>{joke}</p>
    </div>
  );
};

export default SingleCard;
