import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './grid'
export default function Wordle({solution}) {

    const { currentInput, handleKeyup, guesses, isCorrect, turn} = useWordle(solution)

    useEffect(() =>{
        window.addEventListener('keyup',handleKeyup)

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup])

    useEffect(()=>{

    },[guesses,turn,isCorrect])
    return (
        <div>
            <div>current guess - {currentInput}</div>
            <Grid currentInput={currentInput}  guesses={guesses} turn={turn}/>
        </div>
        
    )
        
    
}