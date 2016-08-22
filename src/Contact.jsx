import React from 'react';
import styles from './index.css';

export const Contact = () => {
  return (
    <div className={styles.section}>
      <div className={styles.labelWrapper}>
        <h2 className={styles.sectionLabel}>Contact</h2>
      </div>
      <div>
        <ul className={styles.list}>
          <li><a href="mailto:hsbacot@gmail.com">hsbacot@gmail.com</a></li>
          <li><a href="http://github.com/hsbacot" target="_blank">github.com/hsbacot</a></li>
          <li><a href="tel:347-348-6014">347.348.6014</a></li>
        </ul>
      </div>
    </div>
  )
}
