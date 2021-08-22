import React,{useState} from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Adduser = () => {
    const [user,setuser] = useState({
        name:"",
        username:'',
        email:"",
        mobile:"",
        address:""
    });
    const history = useHistory();
    const InputChange = (event)=>{
         const {name,value} = event.target;
         setuser( olditem =>{
             return(
                 { ...olditem,[name]:value }
             )
         })
    } 

     const FormHandling = e => {
        e.preventDefault();
        async function  setData(){
                await axios.post("http://localhost:3003/users",user);
                history.push("/");
            }
            setData();
    }
    return (
        <>
           <div className="container">
           <h1 className="mt-3">Add User</h1> 
                <form onSubmit={FormHandling}>
                        <div className="row justify-content-center mb-3">
                            <div className="col-lg-4 col-md-5 col-sm-6">
                                    <div className="form-group">
                                        <input
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
                                        <button className="btn btn-success rounded-5">Add User</button>
                                </div>
                            </div>
                        </div>
                </form>
           </div>
        </>
    )
}

export default Adduser;
