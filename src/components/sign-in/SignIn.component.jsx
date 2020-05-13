import React from 'react'
import './SignIn.style.scss';
import { auth, signInWithGoogle } from '../firebase/firebase.utility';

class SignIn extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email: '',
             password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {email,password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email:'',
                password:''
            })
        } catch (error){
            console.log(error);
        }
        
    }

    handleChange = (event) => {
        const { name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        const {email,password} = this.state;
        return(
            <div className="mt-5">
                <h4>I already have an account</h4>
                <small>Sign in with your email and password</small>
                <form onSubmit={this.handleSubmit} className="my-4">
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                        type="email" 
                        name="email"
                        className="form-control" 
                        placeholder="Enter email" 
                        value={email}
                        onChange={this.handleChange}
                        required/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                        type="password" 
                        name="password"
                        className="form-control" 
                        placeholder="Enter password" 
                        value={password}
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