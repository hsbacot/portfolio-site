import React from 'react';
import styles from './index.css';

export const Extras = () => {
  return (
    <div className={styles.section}>
      <div className={styles.labelWrapper}>
        <h2 className={styles.sectionLabel}>Extras</h2>
      </div>
      <div>
        <ul className={styles.list}>
          <li>NYCDA React 101 2016</li>
          <li>General Assembly Data Science 2015</li>
          <li>General Assembly CSF 2014</li>
          <li>Winner, Stanford Code Poetry Slam 1.1</li>
          <li>NCAA Division I Athlete, Baseball</li>
        </ul>
      </div>
    </div>
  )
}
