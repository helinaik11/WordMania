import React from 'react'

export default function Modal({isCorrect,turn,solution}) {
  return (
    <div className='modal'>
        {isCorrect && (turn < 3) && (
            <div>
                <h1>Bravo!!!! You winn!!</h1>
                <p className="solution">The word: {solution}</p>
                <p></p>
            </div>
        )}
         {isCorrect && (turn < 6) && (turn >= 3) && (
            <div>
                <h1>Good Job!!</h1>
                <p className="solution">The word: {solution}</p>
                <p></p>
            </div>
        )}
         {isCorrect && (turn === 6) &&(
            <div>
                <h1>Phew!!</h1>
                <p className="solution">The word: {solution}</p>
                <p></p>
            </div>
        )}
         {!isCorrect && (
            <div>
                <h1>Better Luck next time..</h1>
                <p className="solution">The word: {solution}</p>
            </div>
        )}
    </div>
  )
}
