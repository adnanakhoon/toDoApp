import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleComplete, toggleImportant } from '../redux/tasksSlice';
import { Checkbox, IconButton, TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (newText.trim()) {
      dispatch(editTask({ id: task.id, newText }));
      setEditMode(false);
    }
  };

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <Checkbox
        checked={task.completed}
        onChange={() => dispatch(toggleComplete(task.id))}
      />
      <span className="task-text">{task.text}</span>
      <div className="task-actions">
        <IconButton onClick={() => dispatch(toggleImportant(task.id))}>
          {task.important ? <StarIcon className="important" /> : <StarBorderIcon />}
        </IconButton>
        <IconButton onClick={() => setEditMode(true)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => dispatch(deleteTask(task.id))}>
          <DeleteIcon />
        </IconButton>
      </div>
      <Dialog open={editMode} onClose={() => setEditMode(false)}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            variant="outlined"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditMode(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEdit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </li>
  );
};

export default Task;
