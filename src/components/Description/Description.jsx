import css from './Description.module.css';


export const Description = ({ title, text }) => (
    <div>
      <h1 className={css.title}>{title}</h1>
      <p className={css.text}>{text}</p>
    </div>
  );