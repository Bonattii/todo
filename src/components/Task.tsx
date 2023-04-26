import { Trash, Check } from 'phosphor-react';
import { useState } from 'react';

import styles from './Task.module.css';

interface TaskProps {
  title: string;
}

export const Task: React.FC<TaskProps> = ({ title }) => {
  const [isChecked, setIsChecked] = useState(false);

  // change checked for a match with checked tasks later

  return (
    <div
      className={styles.task}
      style={isChecked ? { background: 'var(--gray-500)' } : {}}
    >
      <button
        type="button"
        onClick={() => setIsChecked(!isChecked)}
        className={`${!isChecked ? styles.checkbox : styles.checked}`}
      >
        {isChecked && <Check />}
      </button>

      <p
        style={
          isChecked
            ? { textDecoration: 'line-through', color: 'var(--gray-300)' }
            : { textDecoration: 'none' }
        }
      >
        {title}
      </p>

      <button type="button" className={styles.trashCan}>
        <Trash size={20} />
      </button>
    </div>
  );
};
