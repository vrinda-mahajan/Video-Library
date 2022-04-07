import { useAuth } from "contexts"
import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
  const {user} = useAuth()

    return(
        <nav className="nav-container align-center">
        <div>
          <Link className="text-decor-none" to="/">
            <div className="p2 nav-logo flex-r">
                <i className="app-icon fa-solid fa-clapperboard"></i>
                <span className="app-name">Flora Factory</span>
            </div>
          </Link>
        </div>
  
        <div className="input-container">
            <input className="input-icon-field input-field" type="text" placeholder="Search" />
            <i className="input-icon fas fa-search"></i>
        </div>
  
        {/* <div className="flex-c center">
        <Link to="/signin" className="m1 badge-container">
            <i className="nav-icon badge-icon fas fa-user"></i>
        </Link>
        <span className="nav-icon-text">Account</span>
        </div> */}
                  <div className="flex-r nav-icons">
          {user?<div className="flex-c center">
          <Link to="/profile" className="m1 badge-container">
              <i className="nav-icon badge-icon fas fa-user"></i>
          </Link>
          <span className="nav-icon-text">{`Hi,${user.firstName}`}</span>
          </div>
          :<div className="flex-c center">
          <Link to="/signin" className="m1 badge-container">
              <i className="nav-icon badge-icon fas fa-user"></i>
          </Link>
          <span className="nav-icon-text">Account</span>
          </div>}
          </div>
  
        </nav>
  )
}

export {Navbar}