import React, { useState } from 'react';
import './App.css';

function App() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState('');

  const calculateFLAMES = () => {
    let name1Arr = name1.toLowerCase().split('');
    let name2Arr = name2.toLowerCase().split('');

    // Remove common letters
    name1Arr.forEach((char, index) => {
      if (name2Arr.includes(char)) {
        name1Arr[index] = '';
        name2Arr[name2Arr.indexOf(char)] = '';
      }
    });

    const remainingLetters = [...name1Arr, ...name2Arr].filter(char => char !== '');

    const flames = ['Friendship', 'Love', 'Affection', 'Marriage', 'Enemy', 'Siblings'];

    while (flames.length > 1) {
      const count = remainingLetters.length % flames.length;
      const indexToRemove = count === 0 ? flames.length - 1 : count - 1;
      flames.splice(indexToRemove, 1);
    }

    setResult(flames[0]);
  };

  return (
    <div className="App">
      <h1>Dinesh's </h1>
      <h1>FLAMES Calculator</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter name 1"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter name 2"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
        />
        <button onClick={calculateFLAMES}>Calculate</button>
      </div>
      {result && <p className="result">You are {result}</p>}
    </div>
  );
}

export default App;
