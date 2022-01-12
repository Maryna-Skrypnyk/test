import PropTypes from 'prop-types';
import styles from './Header.module.scss';

export default function Header({ children }) {
  return (
    <div className={styles.sectionHeader}>
      <header className={styles.header}>{children}</header>
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.node,
};
