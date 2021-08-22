import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';

const Home = () => {
    let [users,setUsers] = useState([]);
    useEffect(()=>{
      async function getData(){
          const res = await  axios.get("http://localhost:3003/users")
          setUsers(res.data.reverse())
        //   res.data.forEach((elements)=>{
        //     console.log(elements);
        //   })
      }
      getData();
    },[])
    
    return (
        <>
            <div className="container">
                <h1 className="mt-2">Home Page</h1>
                <table class="table mt-4 border shadow">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user,index)=>{
                                        const {id,username,name,email} = user;
                                        return(
                                            <tr>
                                                <th scope="row">{index+1}</th>
                                                <td>{username}</td>
                                                <td>{name}</td>
                                                <td>{email}</td>
                                                <td >
                                                    <NavLink to={`/view/${id}`} className="btn btn-primary offset-1"><VisibilityIcon/></NavLink>
                                                    <NavLink to={`/edit/${id}`} className="btn btn-success offset-1"><EditIcon/></NavLink>
                                                    <NavLink to={`/delete/${id}`} className="btn btn-danger offset-1"><DeleteIcon/></NavLink>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                </table>
            </div>
        </>
    )
}

export default Home;
