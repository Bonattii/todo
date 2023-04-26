import { NewTask } from './components/NewTask';
import { Header } from './components/Header';
import { EmptyTasks } from './components/EmptyTasks';
import { TaskCounter } from './components/TaskCounter';

import './global.css';
import styles from './App.module.css';

export const App = () => {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.formContainer}>
          <NewTask />
        </div>

        <div className={styles.taskCounterContainer}>
          <TaskCounter title="Tasks created" count={0} color="purple" />
          <TaskCounter title="Completed" count={0} color="blue" />
        </div>

        <EmptyTasks />
      </div>
    </div>
  );
};
