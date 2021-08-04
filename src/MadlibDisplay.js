import React, {useState, useEffect, useRef} from "react"
import MadlibForm from "./MadlibForm"

const MadlibDisplay = () => {
    const [item, setItem] = useState()
    const INITIAL_STATE = ''
    const madlibData = (newItem) => {
        setItem(`There was merciful cat named ${newItem.noun} he was friends with a frownee named ${newItem.noun2}
        One day they were ${newItem.adjec} in a star colored ${newItem.colors}.`)
        
    }
    const nevermind = (e) => {
        e.preventDefault();
        setItem(INITIAL_STATE)
    }
    return (
        <div>
            <MadlibForm madlibData={madlibData} />
            <div>
                <h3>{item}</h3>
                <button onClick={nevermind}>Start Again</button>
            </div>
        </div>
    )
}
export default MadlibDisplay