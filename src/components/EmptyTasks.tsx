import { ClipboardText } from 'phosphor-react';

import styles from './EmptyTasks.module.css';

export const EmptyTasks = () => {
  return (
    <div className={styles.emptyTasksContainer}>
      <ClipboardText size={56} />

      <div className={styles.emptyContent}>
        <h3>You still don't have tasks registered</h3>
        <p>Create tasks and organize your to-do items</p>
      </div>
    </div>
  );
};
