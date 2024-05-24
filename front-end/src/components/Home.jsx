import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/category" className="nav-link">Category</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/product" className="nav-link">Product</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <h1 align='center' className="mt-4">Product Page</h1>

        </>

    )
}

export default Home