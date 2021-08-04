import React, {useState, useEffect, useRef} from "react"

const MadlibForm = ({madlibData}) => {

    const INITIAL_STATE = {
        noun: '',
        noun2: '',
        adjec: '',
        colors: ''


    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    const haggleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        madlibData({...formData})
        setFormData(INITIAL_STATE)
    }
    
    return (
        <>
        <h3>Hello World!</h3>
        <form onSubmit={handleSubmit}>
        <input id={Object.keys(formData)[0]} name={Object.keys(formData)[0]} placeholder={Object.keys(formData)[0]} value={formData[Object.keys(formData)[0]]} onChange={haggleChange}></input>
        <input id={Object.keys(formData)[1]} name={Object.keys(formData)[1]} placeholder={Object.keys(formData)[1]} value={formData[Object.keys(formData)[1]]} onChange={haggleChange}></input>
        <input id={Object.keys(formData)[2]} name={Object.keys(formData)[2]} placeholder={Object.keys(formData)[2]} value={formData[Object.keys(formData)[2]]} onChange={haggleChange}></input>
        <input id={Object.keys(formData)[3]}name={Object.keys(formData)[3]} placeholder={Object.keys(formData)[3]} value={formData[Object.keys(formData)[3]]} onChange={haggleChange}></input>
        <button>Get Story</button>
        </form>
        </>
    )
}

export default MadlibForm