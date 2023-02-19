import React, { useState } from "react";

const Form = () => {
    //   const [name, setName] = useState('');
    const [name, setName] = useState('pppp');
    const [comments, setComments] = useState('');
    const [topic, setTopic] = useState('Female');
    const [password, setPassword] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleCommentsChange = (event) => {
        setComments(event.target.value);
    }

    const handleOptionChanged = (event) => {
        setTopic(event.target.value)
    }

    const handleSubmit = (event) => {
        alert(name);
    }
    const handlePassword = (event) =>{
        setPassword(event.target.value);
        console.log(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name : </label>
                <input type='text' value={name} onChange={handleNameChange} />
            </div>
            <div>
                <label>password</label>
                <input type='text' value={password} onChange={handlePassword} />
            </div>
            <div>
                <label>Comments : </label>
                <textarea value={comments} onChange={handleCommentsChange} />
            </div>
            <div>
                <label>Select Gender</label>
                <select select={topic} onChange={handleOptionChanged}>
                    <option value={'Male'}>Male</option>
                    <option value={'Female'}>Female</option>
                    <option value={'Common Gender'}>Common Gender</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form;