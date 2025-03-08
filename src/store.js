import { configureStore, createSlice } from '@reduxjs/toolkit';

const loadTasks = () => {
  const savedTasks = localStorage.getItem('tasks');
  return savedTasks ? JSON.parse(savedTasks) : [];
};


const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { tasks: loadTasks() },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem('tasks', JSON.stringify(state.tasks));
      }
    }
  }
});


export const { addTask, removeTask, toggleTask } = tasksSlice.actions;


export const store = configureStore({
  reducer: { tasks: tasksSlice.reducer }
});
