import { PlusCircle } from 'phosphor-react';

import styles from './NewTask.module.css';

export const NewTask = () => {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Add a new task" required />
      <button type="submit">
        Create
        <PlusCircle size={16} />
      </button>
    </form>
  );
};
