import React, { useState } from 'react';
import "./AdminLogin.css"
import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {
    const [email, setEmail] =useState("admin@admin.com");
    const [password, setPassword] = useState("admin1234");
    const defaultAdmin = "admin@admin.com"
    const defaultPassword = "admin1234"
    const navigate = useNavigate()
    const handleEmailChange =(event: React.ChangeEvent<HTMLInputElement>)=>{setEmail(event.target.value);}
    const handlePasswordChange =(event: React.ChangeEvent<HTMLInputElement>)=>{setPassword(event.target.value)}

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        
        if(email == defaultAdmin && password == defaultPassword){
            navigate('/dashboard')
        }
        else{
            alert('Wrong Password');
        }
    }
    return (
        <div>
        <div className="login-dark">
        <form method="post" onSubmit={handleFormSubmit}>
            <h2 className="sr-only">Admin Login</h2>
            <div className="illustration"><i className="icon ion-ios-locked-outline"></i></div>
                <div className="form-group">
                    <input className="form-control" onChange={handleEmailChange} type="email" value={email}/>
                </div>
            <div className="form-group">
                <input className="form-control" onChange={handlePasswordChange} type="password" value={password}/>
            </div>
            <div className="form-group">
                <button className="btn btn-primary btn-block" type="submit">Log In</button>
            </div>
        </form>
        </div>
        </div>
    );
};

export default AdminLogin;