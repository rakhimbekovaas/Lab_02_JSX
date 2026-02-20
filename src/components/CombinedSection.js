import React from 'react';
import ItemList from './ItemList';

function CombinedSection() {
  const items = [
    { id: 1, name: "Яблоко" },
    { id: 2, name: "Банан" },
    { id: 3, name: "Вишня" }
  ];

  return (
    <>
      <h2>Мой список</h2>
      <ItemList />
      <p>Всего элементов: {items.length}</p>
    </>
  );
}

export default CombinedSection;