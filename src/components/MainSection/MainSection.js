import PropTypes from 'prop-types';
import styles from './MainSection.module.scss';

export default function MainSection({ children }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>{children}</div>
    </section>
  );
}

MainSection.propTypes = {
  children: PropTypes.node,
};
