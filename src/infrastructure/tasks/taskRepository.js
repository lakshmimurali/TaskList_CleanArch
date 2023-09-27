import TaskEntity from '../../domain/tasks/taskEntity';
import TaskRepositoryInterface from '../../domain/tasks/taskRepositoryInterface';

const tasks = [];

class TaskRepository extends TaskRepositoryInterface {
  getAllTasks() {
    return tasks;
  }

  addTask(taskValue) {
    const newTask = new TaskEntity(Date.now(), taskValue.text);
    tasks.push(newTask);
  }

  deleteTask(taskId) {
    const index = tasks.findIndex((task) => task.id === taskId);
    if (index !== -1) {
      tasks.splice(index, 1);
    }
  }
}

export default TaskRepository;
