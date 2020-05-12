import React from 'react'
import './SignIn.style.scss';
import { signInWithGoogle } from '../firebase/firebase.utility';

class SignIn extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: 'abhisek529@gmail.com',
             password: 'paul@54321'
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            email:'',
            password:''
        })
    }

    handleChange = (event) => {
        const { name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div className="mt-5">
                <h4>I already have an account</h4>
                <small>Sign in with your email and password</small>
                <form onSubmit={this.handleSubmit} className="my-4">
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email" 
                        id="email" 
                        value={this.state.email}
                        onChange={this.handleChange}
                        required/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                        type="password" 
                        className="form-control" 
                        placeholder="Enter password" 
                        id="password" 
                        value={this.state.password}
                        onChange={this.handleChange} 
                        required/>
                    </div>
                    <div className="mt-4">
                    <button type="submit" className="btn btn-dark mr-4">Sign in</button>
                    <button onClick={signInWithGoogle} className="btn btn-primary">Sign In With Google</button>
                    </div>
                </form>
            </div>
        )
    }
    
}

export default SignIn;