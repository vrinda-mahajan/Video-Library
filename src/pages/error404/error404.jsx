import "./error404.css"
import errorImg from "assets/images/error-img.svg"
import { Link } from "react-router-dom"

const Error404 = () => {
    return(
        <div className="flex-c center error-container">
            <img className="responsive-img error-img" src={errorImg} alt="Error 404" />
            <Link to="/">
                <button class="m2 btn btn-secondary">Browse back to home</button>
            </Link>
        </div>
    )
}

export {Error404}