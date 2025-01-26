import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <div>
            <h1> The page you are looking for does not exist</h1>

            <Link to='/'> Go back to home page </Link>
        </div>
    )
}

export default ErrorPage;