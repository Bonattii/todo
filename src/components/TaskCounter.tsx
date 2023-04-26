import styles from './TaskCounter.module.css';

interface TaskCounterProps {
  title: string;
  count: number;
  color: string;
}

export const TaskCounter: React.FC<TaskCounterProps> = ({
  title,
  count,
  color
}) => {
  return (
    <>
      <div className={styles.taskCounter}>
        <p
          style={
            color === 'purple'
              ? { color: 'var(--blue-500)' }
              : { color: 'var(--purple-500)' }
          }
        >
          {title}
        </p>
        <span>{count}</span>
      </div>
    </>
  );
};
