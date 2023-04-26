import { Trash, Check } from 'phosphor-react';
import { useState } from 'react';

import styles from './Task.module.css';

interface TaskProps {
  title: string;
  id: string;
  onCheck: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export const Task: React.FC<TaskProps> = ({
  title,
  onCheck,
  onDeleteTask,
  id
}) => {
  const [isChecked, setIsChecked] = useState(false);

  // change checked for a match with checked tasks later

  const handleCheckTask = () => {
    setIsChecked(!isChecked);
    onCheck(id);
  };

  const handleDeleteTask = () => {
    onDeleteTask(id);
  };

  return (
    <div
      className={styles.task}
      style={isChecked ? { background: 'var(--gray-500)' } : {}}
    >
      <button
        type="button"
        onClick={handleCheckTask}
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

      <button
        onClick={handleDeleteTask}
        type="button"
        className={styles.trashCan}
      >
        <Trash size={20} />
      </button>
    </div>
  );
};
