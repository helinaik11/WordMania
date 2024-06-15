import React from 'react'
import Row from './row'
export default function Grid({currentInput,guesses,turn})
{
    return (
        <div>
            {guesses.map((g, i)=>{
            return <Row key={i} guess={g}/>
        })}
        </div>
    )
    
}