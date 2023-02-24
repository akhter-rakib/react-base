import React, {useState, useEffect} from "react";
import axios from "axios";


const Http = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setData(response.data)
            })
            .catch(error => console.log(error));
    }, []);

   
    return (
     <div>
         <ul>
            {data && data.map(post => (
             <li key={post.id}>
                {post.title}
             </li>))}
        </ul>
     </div> 
    )
}

export default Http;