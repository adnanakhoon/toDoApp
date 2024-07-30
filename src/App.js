import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import ImportantTaskList from './components/ImportantTaskList.js';
import { Container, Typography, Box } from '@mui/material';
import './App.css';

const App = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          To-Do App
        </Typography>
        <AddTask />
        <TaskList />
        <ImportantTaskList />
        
      </Box>
    </Container>
  );
};

export default App;
