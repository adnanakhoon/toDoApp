import { createSlice } from '@reduxjs/toolkit';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('tasks');
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('tasks', serializedState);
  } catch {
    // ignore write errors
  }
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: loadState(),
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false, important: false });
      saveState(state);
    },
    deleteTask: (state, action) => {
      const newState = state.filter(task => task.id !== action.payload);
      saveState(newState);
      return newState;
    },
    editTask: (state, action) => {
      const { id, newText } = action.payload;
      const task = state.find(task => task.id === id);
      if (task) {
        task.text = newText;
      }
      saveState(state);
    },
    toggleComplete: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
      saveState(state);
    },
    toggleImportant: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.important = !task.important;
      }
      saveState(state);
    }
  }
});

export const { addTask, deleteTask, editTask, toggleComplete, toggleImportant } = tasksSlice.actions;

export const selectImportantTasks = (state) => state.tasks.filter(task => task.important);

export default tasksSlice.reducer;
