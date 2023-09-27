import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from '../../store/actions';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import TaskService from '../../application/tasks/taskService';
import TaskRepository from '../../infrastructure/tasks/taskRepository';

// Create an instance of the TaskRepository
const taskRepository = new TaskRepository();

const taskService = new TaskService(taskRepository);

const TaskContainer = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (text) => {
    const task = taskService.addTask(text);
    dispatch(addTask(task));
  };

  const handleDeleteTask = (taskId) => {
    taskService.deleteTask(taskId);
    dispatch(deleteTask(taskId));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onSubmit={handleAddTask} />
      <TaskList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
};

export default TaskContainer;
