import styles from "./Options.module.css"

const Options = ({ onLeaveFeedback, onResetFeedback, showResetButton }) => {
  return (
    <div>
      <button
        className={`${styles.btn} ${styles.good}`}
        type="button"
        onClick={() => onLeaveFeedback("good")}
      >
        Good
      </button>
      <button
        className={`${styles.btn} ${styles.neutral}`}
        type="button"
        onClick={() => onLeaveFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={`${styles.btn} ${styles.bad}`}
        type="button"
        onClick={() => onLeaveFeedback("bad")}
      >
        Bad
      </button>
      {showResetButton && (
        <button type="button" onClick={onResetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;