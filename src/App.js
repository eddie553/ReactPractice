import React from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';

const App = () => {
  return (
    <TodoTemplate>
      {' '}
      <TodoInsert />{' '}
    </TodoTemplate>
  );
};

export default App;
