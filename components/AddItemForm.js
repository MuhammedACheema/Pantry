import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const AddItemForm = ({ addItem }) => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ itemName, quantity });
    setItemName('');
    setQuantity('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Item Name"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Add Item
      </Button>
    </Box>
  );
};

export default AddItemForm;
