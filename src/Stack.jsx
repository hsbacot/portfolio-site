import React, { PropTypes } from 'react';
import styles from './index.css';

export const Stack = ({ currentStack }) => {
  const stack = currentStack.map( tool => <li>{tool}</li>);
  return (
    <div className={styles.section}>
      <div className={styles.labelWrapper}>
        <h2 className={styles.sectionLabel}>Current</h2>
      </div>
      <ul className={styles.list}>
        {stack}
      </ul>
    </div>
  )
}

Stack.propTypes = {
  currentStack: PropTypes.array
};
