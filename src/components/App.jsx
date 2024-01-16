import { useState } from 'react';
import { Description } from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  // Функція для оновлення стану відгуків
  const handleFeedback = (type) => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1
    }));
  };
 // Обчислення загальної кількості відгуків
 const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  return (
    <>
      <Description title="Sip Happens Café" text="Please leave your feedback about our service by selecting one of the options below." />
      <Options onFeedback={handleFeedback} />
      <Feedback feedback={feedback} />
    </>
  );
}

export default App;