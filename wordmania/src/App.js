import './index.css';
import { useState,useEffect } from 'react';
import Wordle from './components/wordle'
function App() {

  const [solution,setSolution]= useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/answers')
    .then(res=>res.json())
    .then(json => {
      const randomSolution =json[Math.floor(Math.random()*json.length)]
      setSolution(randomSolution.word)
    })
  },[setSolution])
  return (
    <div className="App">
      <h1>
       Heli's Word Mania
      </h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App;
