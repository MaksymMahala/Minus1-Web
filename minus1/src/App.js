import React from 'react';
import Sidebar from './Sidabar';
import Dashboard from './Dashboard';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
