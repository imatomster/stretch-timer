import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Quizlet from './components/Quizlet/Quizlet'


function App() {
  return (
    <div className="App">
      <Navbar />

      <Quizlet />
    </div>
  );
}

export default App;
