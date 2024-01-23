import css  from './Feedback.module.css';
import { CiFaceSmile } from "react-icons/ci";
import { CiFaceMeh } from "react-icons/ci";
import { CiFaceFrown } from "react-icons/ci";
import { FiActivity } from "react-icons/fi";
import { FiClipboard } from "react-icons/fi";

function Feedback({ feedback, totalFeedback, positivePercentage }) {
  return (
    <div className={css.item}>
      <p><CiFaceSmile /> Good: {feedback.good}</p>
      <p><CiFaceMeh /> Neutral: {feedback.neutral}</p>
      <p><CiFaceFrown /> Bad: {feedback.bad}</p>
      <p> <FiClipboard /> Total Feedback: {totalFeedback}</p>
      <p><FiActivity /> Positive Percentage: {positivePercentage}%</p>
    </div>
  );
}

export default Feedback;