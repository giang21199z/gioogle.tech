import styles from './button.module.scss'
import classNames from 'classnames';

function Button({ primary, danger, success, warning, children }) {
  const className = classNames(styles.btn, 
    {
      [styles.btnPrimary]: primary,
      [styles.btnDanger]: danger,
      [styles.btnSuccess]: success,
      [styles.btnWarning]: warning
    }
  );

  return (
    <button className={className}>{children}</button>
  )
}

export default Button;
