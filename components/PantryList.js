import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
  Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';

const PantryList = ({ items, removeItem, updateQuantity }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editedQuantity, setEditedQuantity] = useState('');

  const handleEdit = (index) => {
    setIsEditing(index);
    setEditedQuantity(items[index].quantity);
  };

  const handleSave = (index) => {
    updateQuantity(index, editedQuantity);
    setIsEditing(null);
  };

  return (
    <List>
      {items.map((item, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={item.itemName}
            secondary={
              isEditing === index ? (
                <TextField
                  value={editedQuantity}
                  onChange={(e) => setEditedQuantity(e.target.value)}
                  size="small"
                  type="number"
                />
              ) : (
                `Quantity: ${item.quantity}`
              )
            }
          />
          <ListItemSecondaryAction>
            {isEditing === index ? (
              <IconButton
                edge="end"
                onClick={() => handleSave(index)}
              >
                <SaveIcon />
              </IconButton>
            ) : (
              <IconButton
                edge="end"
                onClick={() => handleEdit(index)}
              >
                <EditIcon />
              </IconButton>
            )}
            <IconButton edge="end" onClick={() => removeItem(index)}>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default PantryList;
