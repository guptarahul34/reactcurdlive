import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Edit = () => {
    const [user,setuser] = useState({
        name:"",
        username:'',
        email:"",
        mobile:"",
        address:""
    });
    const {id} = useParams();
    useEffect(()=>{
        LoadUser();
    },[])

    const history = useHistory();
    const InputChange = (event)=>{
         const {name,value} = event.target;
         setuser( olditem =>{
             return(
                 { ...olditem,[name]:value }
             )
         })
    } 

     const FormHandling = async e => {
        e.preventDefault();
                await axios.put(`http://localhost:3003/users/${id}`,user);
                history.push("/");
    }

    const LoadUser = async ()=>{
  const result = await axios.get(`http://localhost:3003/users/${id}`);
//   console.log(result);
setuser(result.data)
    } 
    return (
        <>
           <div className="container">
           <h1 className="mt-3 text-center">Edit A User ({user.username})</h1> 
                <form onSubmit={FormHandling}>
                        <div className="row justify-content-center mb-3">
                            <div className="col-lg-4 col-md-5 col-sm-6">
                                    <div className="form-group">
                                        <input
                                        value={user.name}
                                        onChange={InputChange} 
                                        type="text" 
                                        className="form-control"
                                        name="name"
                                        autoComplete="off"
                                        placeholder="Enter Your Name"
                                        />
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-3">
                            <div className="col-lg-4 col-md-5 col-sm-6">
                                    <div className="form-group">
                                        <input
                                        value={user.username}
                                        onChange={InputChange} 
                                        type="text" 
                                        className="form-control"
                                        name="username"
                                        autoComplete="off"
                                        placeholder="Enter Your Username"
                                        />
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-3">
                            <div className="col-lg-4 col-md-5 col-sm-6">
                                    <div className="form-group">
                                        <input
                                        value={user.email}
                                        onChange={InputChange} 
                                        type="email" 
                                        className="form-control"
                                        name="email"
                                        autoComplete="off"
                                        placeholder="Enter Your Email"
                                        />
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-3">
                            <div className="col-lg-4 col-md-5 col-sm-6">
                                    <div className="form-group">
                                        <input
                                        value={user.mobile}
                                        onChange={InputChange} 
                                        type="number" 
                                        className="form-control"
                                        name="mobile"
                                        autoComplete="off"
                                        placeholder="Enter Your Mobile"
                                        />
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-3">
                            <div className="col-lg-4 col-md-5 col-sm-6">
                                    <div className="form-group">
                                        <textarea 
                                        value={user.address}
                                        onChange={InputChange}
                                        className="form-control"
                                        name="address"
                                        autoComplete="off"
                                        placeholder="Enter Your Address"
                                        ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-3">
                            <div className="col-lg-4 col-md-5 col-sm-6">
                                    <div className="form-group">
                                        <button className="btn btn-success rounded-5">Update User</button>
                                </div>
                            </div>
                        </div>
                </form>
           </div>
        </>
    )
}

export default Edit;
