import { useAuth, useVideo } from "contexts";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate()
    const {user,setUser} = useAuth()
    const {dispatch} = useVideo()
    const logoutHandler = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        dispatch({type:"LOGOUT"})
        navigate("/")
        setUser("")
    }
    return (
        <div className="flex-c center profile-section">
            <h4 className="m2">Account</h4>
            <section className="profile-details flex-c">
                <button onClick={logoutHandler} className="btn-logout btn btn-primary">Log out</button>
            </section>
        </div>
        
    )
}

export {Profile}