import axios from 'axios';
import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



const Delete = () => {
    const {id} = useParams();
    const history = useHistory();
    useEffect(() => {
        async function Delete(){
            await axios.delete(`http://localhost:3003/users/${id}`)
            history.push("/")
         }
         Delete();
    }, [])
  
    return (
        <>
            {/* <h1>hello i am delete. and is {id}</h1> */}
            
        </>
    )
}

export default Delete;
