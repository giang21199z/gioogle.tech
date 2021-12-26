import styles from './nav.module.scss';
import classNames from 'classnames';

function Nav({children}) {
  const className = classNames();

  return (
    <nav className={className}>
      {children}
    </nav>
  )
}

export default Nav;
