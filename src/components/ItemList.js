import React from 'react';

function ItemList() {
  const items = [
    { id: 1, name: "Яблоко" },
    { id: 2, name: "Банан" },
    { id: 3, name: "Вишня" }
  ];

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default ItemList;