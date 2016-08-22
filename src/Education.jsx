import React from 'react';
import styles from './index.css';

export const Education = () => {
  return (
    <div className={styles.section}>
      <div className={styles.labelWrapper}>
        <h2 className={styles.sectionLabel}>Education</h2>
      </div>
      <div>
        <h3 className={styles.sectionInfo}>University of North Carolina at Asheville</h3>
        <ul className={styles.list}>
          <li>B.A. New Media 2012</li>
          <li>Minor in Communications</li>
        </ul>
      </div>
    </div>
  )
}
