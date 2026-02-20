import React from 'react';
import FragmentLayout from './components/FragmentLayout';  //注意: ./components/ а не components/
import ItemList from './components/ItemList';
import CombinedSection from './components/CombinedSection';

function App() {
  return (
    <>
      <h1>Lab 2.1</h1>
      <FragmentLayout />
      <ItemList />
      <CombinedSection />
    </>
  );
}

export default App;
