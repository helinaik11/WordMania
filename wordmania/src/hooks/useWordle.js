import {useState} from 'react'
const useWordle=(solution)=> {

    const [turn, setTurn] = useState(0)
    const [currentInput, setCurrentInput] = useState('')
    const [guesses, setGuesses] = useState([...Array(6)])
    const [history, setHistory] = useState([])
    const [isCorrect, setIsCorrect] = useState(false)
    const [usedKeys, setUsedKeys]=useState({})
    const alterInput= () => {

        let solArray=[...solution]
        let alteredGuess=[...currentInput].map((l)=>{
            return {key: l, color: 'grey'}
        })

        alteredGuess.forEach((l,i) => {
            if(solArray[i]===l.key){
                alteredGuess[i].color='green'
                solArray[i]=null
            }
        })

        alteredGuess.forEach((l,i) => {
            if(solArray.includes(l.key) && l.color!=='green'){
                alteredGuess[i].color='yellow'
                solArray[solArray.indexOf(l.key)]=null
            }
        })
        return alteredGuess
    }
    
    const addNewInput= (alteredGuess) =>{
        if(currentInput===solution){
            setIsCorrect(true)
        }
        setGuesses((prevGuesses)=>{
            let newGuesses=[...prevGuesses]
            newGuesses[turn]=alteredGuess
            return newGuesses
        })
        setHistory((prevHistory)=>{
            return [...prevHistory, currentInput]
        }) 
        setTurn((prevTurn)=>{
            return prevTurn+1
        })
        setUsedKeys((prevUsedKeys)=>{
            let newKeys={...prevUsedKeys}
            alteredGuess.forEach((l)=>{
                const currentColor= newKeys[l.key]
                if(l.color==='green'){
                    newKeys[l.key]='green'
                    return
                }
                if(l.color==='yellow' && currentColor!=='green'){
                    newKeys[l.key]='yellow'
                    return
                }
                if(l.color==='grey' && currentColor!=='green' && currentColor!=='yellow'){
                    newKeys[l.key]='grey'
                    return
                }
            })
            return newKeys
        })
        setCurrentInput('')
        
    }
    const handleKeyup= ({key}) =>
    {
        if(key === 'Enter')
        {
                if(turn>5)
                {
                    // console.log('guesses used')
                    return
                }
                if(history.includes(currentInput))
                {
                    return
                }
                if(currentInput.length!==5)
                {
                    return
                }
                const altered=alterInput()
                addNewInput(altered)
        }
        if(key === 'Backspace'){
            setCurrentInput((prev)=>prev.slice(0,-1))
            return
            }
            
        
        if(/^[A-Za-z]$/.test(key)){
            if(currentInput.length<5){
                setCurrentInput((prev) => prev+key)
                }
            }

        
    }

    return {turn, currentInput, guesses, isCorrect, handleKeyup,usedKeys}
}
export default useWordle