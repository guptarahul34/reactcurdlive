import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';


const View = () => {
    const [user,setUser] = useState([]);
  const {name,username,email,mobile,address} = user;
  const {id} = useParams();
    useEffect(()=>{
            const Loaduser = async ()=>{
                const result = await axios.get(`http://localhost:3003/users/${id}`);
                console.log(result);
                setUser(result.data);
            }
            Loaduser();
    },[])
    
    return (
        <>
           
           <div className="container">
           <p className="text-center mt-4">User Id Is:   {id}</p>
               <div className="row justify-content-center">
                   <div className="col-lg-4 col-md-5 col-sm-6">
                   <ul className="list-group">
                            <li className="list-group-item">Name : {name}</li>
                            <li className="list-group-item">UserName : {username}</li>
                            <li className="list-group-item">Email : {email} </li>
                            <li className="list-group-item">Mobile {mobile} </li>
                            <li className="list-group-item">Address : {address} </li>
                    </ul>
                   </div>
               </div>
           </div>
          
        </>
    )
}

export default View;
