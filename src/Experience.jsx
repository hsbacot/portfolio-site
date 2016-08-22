import React from 'react';
import styles from './index.css';

export const Experience = () => {
  return (
    <div className={styles.section}>
      <div className={styles.labelWrapper}>
        <h2 className={styles.sectionLabel}>Experience</h2>
      </div>
      <div>
        <h3 className={styles.sectionInfo}>American Express</h3>
        <h4 className={styles.role}>Engineer I, July 2016 - Present</h4>
        <h4 className={styles.role}>Engineer II, November 2014 - July 2016</h4>
        <ul>
          <li>Amex.com internationalized react components. Three billion projected annual views. (React, Redux, Restful API Integration)</li>
          <li>Account Summary experience on angular. 40mm monthly views. (Angular)</li>
          <li>Test Account Portal. Swap and share accounts with mocked data. Removed our dependency on test accounts creation to start. (Rails API, Docker, Posgresql)</li>
          <li>First NYC hire to better integrate engineering, design, and business</li>
        </ul>

        <h3 className={styles.sectionInfo}>Net Theory</h3>
        <h4 className={styles.role}>Developer, February 2013 - November 2014</h4>
        <ul>
          <li>Summerfuel. Summercamp directory and internal camper management app. (Rails)</li>
          <li>Oxford University Press. Led front end Implementation. (Wordpress, Scss)</li>
        </ul>
      </div>
    </div>
  )
}
