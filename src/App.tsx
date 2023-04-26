import { NewTask } from './components/NewTask';
import { Header } from './components/Header';

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
      </div>
    </div>
  );
};
