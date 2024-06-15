import './index.css';
import { useState,useEffect } from 'react';
import Wordle from './components/wordle'
function App() {

  const [solution,setSolution]= useState(null)

  useEffect(() => {
      const words=[{"id": 1, "word": "alter"},
      {"id": 2, "word": "adieu"},
      {"id": 3, "word": "dealt"},
      {"id": 4, "word": "storm"},
      {"id": 5, "word": "jiffy"},
      {"id": 6, "word": "timer"},
      {"id": 7, "word": "trust"},
      {"id": 8, "word": "heart"},
      {"id": 9, "word": "happy"},
      {"id": 10, "word": "smile"},
      {"id": 11, "word": "funny"},
      {"id": 12, "word": "frost"},
      {"id": 13, "word": "cards"},
      {"id": 14, "word": "clamp"},
      {"id": 15, "word": "hefty"},
      {"id": 16, "word": "ninja"},
      {"id":17, "word": "spade"},
      {"id": 18, "word": "pools"},
      {"id": 19, "word": "drive"},
      {"id": 20, "word": "relax"},
      {"id": 21, "word": "times"},
      {"id": 22, "word": "train"},
      {"id": 23, "word": "cores"},
      {"id": 24, "word": "pours"},
      {"id": 25, "word": "blame"},
      {"id": 26, "word": "banks"},
      {"id": 27, "word": "phone"},
      {"id": 28, "word": "bling"},
      {"id": 29, "word": "coins"},
      {"id": 30, "word": "hello"}]
      const randomSolution =words[Math.floor(Math.random()*words.length)]
      setSolution(randomSolution.word)
    
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
