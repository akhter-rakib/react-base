import axios from "axios";
import React, {useState, useEffect} from "react";


const FormPost = () =>{
  
    const [data, setData] = useState({
        name: '',
        email: '',
        message: ''
    });

   
    const handleChange = (event)=> {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }
    const submit = (event) =>{
        
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
             .then(response => console.log(response.data))
             .catch(error => console.log(error));
    }
    return(
        <div>
            <form onSubmit={submit}>
                <label>
                  Name:
                  <input type='text' name='name' value={data.name} onChange={handleChange} />
                </label>
                <label>
                  Name:
                  <input type='email' name='email' value={data.email} onChange={handleChange} />
                </label>
                <label>
                    Message:
                    <input type='text' name='message' value={data.message} onChange={handleChange}/>
                </label>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default FormPost;