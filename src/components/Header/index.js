import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="nav-container">
        <div className="header-links">
          <Link className="link-decoration" to="/">
            <h1 className="header-movie-heading ">MOVIES</h1>
          </Link>
          <Link className="link-decoration" to="/">
            <h1 className="nav-link-home">Home</h1>
          </Link>
          <Link className="link-decoration" to="/popular">
            <h1 className="nav-link-popular">Popular</h1>
          </Link>
        </div>
      </nav>
    )
  }
}
export default Header
