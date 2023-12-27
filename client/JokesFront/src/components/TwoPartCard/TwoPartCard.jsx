import styles from "./TwoPartCard.module.css";

const TwoPartCard = ({ setup, delivery }) => {
  return (
    <div className={styles.container}>
      <p className={styles.vinieta}>{setup}</p>
      <p className={styles.vinieta2}>{delivery}</p>
    </div>
  );
};
export default TwoPartCard;
