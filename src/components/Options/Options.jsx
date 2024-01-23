
import css  from './Options.module.css';

function Options({ onFeedback, onReset, hasFeedback }) {
  return (
    <div className={css.list}>
      <button className={css.button} onClick={() => onFeedback('good')}>Good</button>
      <button className={css.button} onClick={() => onFeedback('neutral')}>Neutral</button>
      <button className={css.button} onClick={() => onFeedback('bad')}>Bad</button>
      {hasFeedback && <button className={css.button} onClick={onReset}>Reset</button>}
    </div>
  );
}

export default Options;

