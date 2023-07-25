import React, { useState } from 'react';
import './feedback.css';

const Feedback = () => {
  const [feedbackState, setFeedbackState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = type => {
    setFeedbackState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedbackState;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedbackState;
    const total = countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  const { good, neutral, bad } = feedbackState;
  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className="feedbackSection">
      <div className="feedbackButtonSection">
        <h2>Please leave your feedback</h2>
        <button onClick={() => handleFeedback('good')}>Good</button>
        <button onClick={() => handleFeedback('neutral')}>Neutral</button>
        <button onClick={() => handleFeedback('bad')}>Bad</button>
      </div>

      {totalFeedback > 0 ? (
        <div className="feedbackStatistics">
          <h2>Statistics</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {totalFeedback}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </div>
      ) : (
        <p className="feedbackKeine">There is no feedback</p>
      )}
    </div>
  );
};

export default Feedback;
