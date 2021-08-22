import React from 'react'

const Contact = () => {
    const Formhandle = (e)=>{
        e.preventDefault();
    }
    return (
        <>
            <div className="container">
            <form className="mt-4" onSubmit={Formhandle}>
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                </div>
            </div>  
                    <div className="row justify-content-center">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                        <button type="submit" className="btn btn-primary ">Send Email</button>
                        </div>
                    </div>
                    
            </form>
            </div>
        </>
    )
}

export default Contact;
