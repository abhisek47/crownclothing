import React from 'react'
import './SignUp.style.scss';
import { auth, createUserProfileDocument } from '../firebase/firebase.utility'; 

class SignUp extends React.Component {
    constructor() {
        super()
    
        this.state = {
             displayName: '',
             email: '',
             password: '',
             confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = this.state;

        if(password !== confirmPassword ){
            alert(`Password don't match`)
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            )
            await createUserProfileDocument(user,{displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '' 
            })
        } catch (error){
            console.error(error);
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const {name,value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        const {displayName,email,password,confirmPassword} = this.state;
        return(
            <div className="mt-5">
                <h4>I don't have an account</h4>
                <small>Sign up with your email and password</small>
                <form onSubmit={this.handleSubmit} className="my-4">
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                        type="text" 
                        name="displayName"
                        className="form-control"
                        placeholder="Display name"
                        onChange={this.handleChange} 
                        value={displayName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input 
                        type="email"
                        name="email" 
                        className="form-control" 
                        placeholder="Enter email"
                        onChange={this.handleChange} 
                        value={email} 
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                        type="password" 
                        name="password"
                        className="form-control" 
                        placeholder="Enter password"
                        onChange={this.handleChange} 
                        value={password} 
                        required
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input 
                        type="password"
                        name="confirmPassword" 
                        className="form-control" 
                        placeholder="Re-enter password"
                        onChange={this.handleChange} 
                        value={confirmPassword} 
                        required 
                        />
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