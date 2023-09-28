class TaskService {
  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  getAllTasks() {
    return this.taskRepository.getAllTasks();
  }

  addTask(taskValue) {
    return this.taskRepository.addTask(taskValue);
  }

  deleteTask(taskId) {
    this.taskRepository.deleteTask(taskId);
  }
}

export default TaskService;
