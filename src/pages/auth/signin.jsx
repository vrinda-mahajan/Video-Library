import "./auth.css"
import authImg from "assets/images/authentication.svg"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "custom hooks"
import { useAuth } from "contexts";

const Signin = () => {
    const navigate = useNavigate()

    useDocumentTitle("Login");
    const {signInHandler,signUpHandler} = useAuth();
    const [formDetails,setFormDetails] = useState(
        {
            email:"",
            password:""
        })

    const handleLogin = (e) => {
        e.preventDefault()
        signInHandler(formDetails.email,formDetails.password)
        navigate("/")
    }
    const guestLogin = () => {
        setFormDetails(()=>({email:"guestlogin1@gmail.com",password:"1234"}))
    }
    const handleFormDetails = (e,detail) => {
        setFormDetails((prev)=>(
            {...prev,[detail]:e.target.value}
        ))
    }
    return (
        <main className="auth-section">
        <section className="login-section">
        <form onSubmit={handleLogin} className="form form-auth">
            <div className="auth-heading">
                <h3>Login</h3>
                <img className="responsive-img auth-img" src={authImg} alt="authentication" />
            </div>
    
            <div className="input-auth">
                <label className="input-label" htmlFor="email">Email</label>
                <input onChange={(e)=>{handleFormDetails(e,"email")}} className="input-field auth-field" type="email" id="email" placeholder="Enter your email here" />
            </div>

            <div className="input-auth">
                <label className="input-label" htmlFor="password">Password</label>
                <input onChange={(e)=>{handleFormDetails(e,"password")}} className="input-field auth-field" type="password" id="password" placeholder="*******" />
            </div>

            <div className="auth-footer">
            <button type="submit" className="btn-auth btn btn-secondary">Login</button>
            <button onClick={()=>guestLogin()} type="submit" className="btn-auth btn btn-secondary-outline">Login as guest</button>
            <span className="auth-span">Not a user yet?</span> 
            <Link to="/signup">
                <button type="button" className="auth-link link-sign-up btn btn-link-underline">
                    Create Account
                </button>
            </Link>
            </div>
        </form>
    </section>
    </main>
    )
}

export {Signin}