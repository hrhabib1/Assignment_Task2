import { useState } from 'react';
import './App.css'; 
const App = () => {
  const [outputString, setOutputString] = useState('');

  const handleTileClick = (letter) => {
    let newOutputString = outputString + letter;

    // Function to replace consecutive letters
    newOutputString = newOutputString.replace(/(.)\1{2,}/g, (match) => '_'.repeat(match.length));

    setOutputString(newOutputString);
  };

  const renderTiles = () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return alphabet.map((letter) => (
      <button key={letter} className="tile" onClick={() => handleTileClick(letter)}>
        {letter}
      </button>
    ));
  };

  return (
    <div className="app">
      <div className="tile-container">{renderTiles()}</div>
      <div id="outputString" className="output-string"><strong>Output String:</strong> <span className='output'>{outputString}</span> </div>
    </div>
  );
};

export default App;

