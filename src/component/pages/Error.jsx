import React from 'react'
import { useHistory } from 'react-router';

const Error = () => {
    const history = useHistory();
    return (
        <>
               
            <div className="not-found">
               <h1 className="error"><span className="errorname">404</span> Page Not Found</h1>
               <div className="row">
                   <div className="col-6">
                       <button className="btn btn-outline-secondary btnclass" onClick={
                           ()=>{
                               history.push("/")
                           }
                       }>Go To Home</button>
                   </div>
               </div>
            </div>
        </>
    )
}

export default Error;
