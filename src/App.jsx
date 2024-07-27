import { useEffect, useState } from 'react'
import './App.css'
import Description from './components/Description/Description'
import Options from './components/Options/Options'
import Feedback from './components/Feedback/Feedback'
import Notification from './components/Notification/Notification'

function App() {
  const [typeFeedback, setTypeFeedback] = useState(() => {
    const getFeedbackFromLS = localStorage.getItem("feedback");
    return getFeedbackFromLS
      ? JSON.parse(getFeedbackFromLS)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(typeFeedback));
  }, [typeFeedback]);

  const hasFeedback =
    typeFeedback.good > 0 || typeFeedback.neutral > 0 || typeFeedback.bad > 0;

  const updateFeedback = (feedback) => {
    setTypeFeedback({
      ...typeFeedback,
      [feedback]: typeFeedback[feedback] + 1,
    });
  };

  const resetFeedback = () => {
    setTypeFeedback({ good: 0, neutral: 0, bad: 0 })
  };

  const totalFeedback = typeFeedback.good + typeFeedback.neutral + typeFeedback.bad;
  const positiveFeedback = Math.round((typeFeedback.good / totalFeedback) * 100);


  return (
    <>
      <div>
        <Description />
      </div>
      <div>
        <Options
          onLeaveFeedback={updateFeedback}
          showResetButton={hasFeedback}
          onResetFeedback={resetFeedback}
        />
      </div>
      <div>
        {hasFeedback ? (
          <Feedback
            good={typeFeedback.good}
            neutral={typeFeedback.neutral}
            bad={typeFeedback.bad}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
}

export default App
