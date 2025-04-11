import { assests } from '../../assets/assets'
import './Menubar.css'
import { Link } from 'react-router-dom'

const Menubar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">
    <Link className="navbar-brand" to="/">
        <img src={assests.logo1} alt="Logo" height="40"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse p-2" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link"to="/explore">Explore</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/items">Manage Items</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link"to="/category">Manage Categories</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link"to="/users">Mange Users</Link>
            </li>
        </ul>
       {/* Add the drop down for userProfile */}
    </div>
</nav>
  )
}

export default Menubar