import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from 'phosphor-react';
import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react';

import { Task } from './components/Task';
import { Header } from './components/Header';
import { EmptyTasks } from './components/EmptyTasks';
import { TaskCounter } from './components/TaskCounter';

import './global.css';
import styles from './App.module.css';

export const App = () => {
  const [tasks, setTasks] = useState<
    Array<{ id: string; title: string; isComplete: boolean }>
  >([]);
  const [taskTitle, setTaskTile] = useState('');

  const handleTaskTitle = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('');
    setTaskTile(event.target.value);
  };

  const handleTaskTitleInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity('This field is required!!');
  };

  const handleCreateNewTask = (event: FormEvent) => {
    event.preventDefault();

    setTasks([...tasks, { id: uuidv4(), title: taskTitle, isComplete: false }]);

    setTaskTile('');
  };

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <div className={styles.formContainer}>
          <form onSubmit={handleCreateNewTask} className={styles.form}>
            <input
              type="text"
              placeholder="Add a new task"
              value={taskTitle}
              onChange={handleTaskTitle}
              onInvalid={handleTaskTitleInvalid}
              required
            />

            <button type="submit">
              Create
              <PlusCircle size={16} />
            </button>
          </form>
        </div>

        <div className={styles.taskCounterContainer}>
          <TaskCounter title="Tasks created" count={0} color="purple" />
          <TaskCounter title="Completed" count={0} color="blue" />
        </div>

        {tasks.length > 0 ? (
          tasks.map(task => <Task key={task.id} title={task.title} />)
        ) : (
          <EmptyTasks />
        )}
      </div>
    </div>
  );
};
