import React, { useState } from 'react';
import Layout from '../components/Layout';
import AddItemForm from '../components/AddItemForm';
import PantryList from '../components/PantryList';

export default function Home() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const updateQuantity = (index, newQuantity) => {
    const newItems = items.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity } : item
    );
    setItems(newItems);
  };

  return (
    <Layout>
      <AddItemForm addItem={addItem} />
      <PantryList items={items} removeItem={removeItem} updateQuantity={updateQuantity} />
    </Layout>
  );
}
