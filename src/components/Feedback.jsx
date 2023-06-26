import React from 'react';
import './feedback.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedback = type => {
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className="feedbackSection">
        <div className="feedbackButtonSection">
          <h2>Please leave your feedback</h2>
          <button onClick={() => this.feedback('good')}>Good</button>
          <button onClick={() => this.feedback('neutral')}>Neutral</button>
          <button onClick={() => this.feedback('bad')}>Bad</button>
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
  }
}

export default Feedback;
