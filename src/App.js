import React, { useState, useCallback } from 'react';
import axios from 'axios';
import NewsList from './component/NewList';
import Categories from './component/Categories';

function App() {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);

  return (
    <div>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </div>
  );
};

export default App;
