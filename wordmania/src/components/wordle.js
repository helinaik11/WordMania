import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './grid'
import Keypad from './keypad'
import Modal from './modal'
export default function Wordle({solution}) {

    const { currentInput, handleKeyup, guesses, isCorrect, turn, usedKeys} = useWordle(solution)
    const [showModal,setShowModal]= useState(false)
    useEffect(() =>{
        window.addEventListener('keyup',handleKeyup)
        if(isCorrect){
            setTimeout(()=>setShowModal(true),1000)
            window.removeEventListener('keyup', handleKeyup)
        }
        if(turn===6){
            setTimeout(()=>setShowModal(true),1500)
            window.removeEventListener('keyup', handleKeyup)
        }

        return () => window.removeEventListener('keyup', handleKeyup)
    }, [handleKeyup,isCorrect,turn])

    return (
        <div>
            <Grid currentInput={currentInput}  guesses={guesses} turn={turn}/>
            <Keypad usedKeys={usedKeys}/>
            {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution}/>}
        </div>
        
    )
        
    
}