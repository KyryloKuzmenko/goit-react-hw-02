import styles from "./Options.module.css"

const Options = ({ onLeaveFeedback, onResetFeedback, showResetButton }) => {
  return (
    <div>
      <button type="button" onClick={() => onLeaveFeedback("good")}>
        Good
      </button>
      <button type="button" onClick={() => onLeaveFeedback("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => onLeaveFeedback("bad")}>
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