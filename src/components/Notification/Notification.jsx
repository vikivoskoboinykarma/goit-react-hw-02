import css from './Notification.module.css';

function Notification({ message }) {
    return (
      <div className={css.text}>
        <p>{message}</p>
      </div>
    );
  }
  
  export default Notification;