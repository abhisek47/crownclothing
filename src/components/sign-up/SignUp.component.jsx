import React from 'react'
import './SignUp.style.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             email: '',
             password: ''
        }
    }

    render(){
        return(
            <div className="mt-5">
                <h4>I don't have an account</h4>
                <small>Sign up with your email and password</small>
                <form action="#" className="my-4">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Display name" id="name" value={this.state.name}/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" id="email" value={this.state.email} required/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" id="password" value={this.state.password} required/>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="confirmpwd" className="form-control" placeholder="Re-enter password" id="confirmpwd" value={this.state.password} required />
                    </div>
                    <div className='mt-4'>
                    <button type="submit" className="btn btn-dark">Sign Up</button>
                    </div>
                </form>
            </div>
        )
    }
    
}

export default SignUp;