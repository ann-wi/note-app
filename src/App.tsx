// import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router';
import './App.css';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<h1>Hi</h1>} />
      <Route path="/new" element={<h1>New note</h1>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
