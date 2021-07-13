import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BiSearch} from 'react-icons/bi'
import {FaUserCircle} from 'react-icons/fa'
import {CgMenuCheese} from 'react-icons/cg'
import './index.css'

class Header extends Component {
  state = {searchInputValue: ''}

  onClickEnterKey = event => {
    this.setState({searchInputValue: event.target.value})
  }

  render() {
    const {searchInputValue} = this.state
    return (
      <nav className="nav-container">
        <div className="header-links">
          <Link className="link-decoration" to="/">
            <h1 className="header-movie-heading">MOVIES</h1>
          </Link>
          <div className="home-popular-container">
            <Link className="link-decoration" to="/">
              <h1 className="nav-link-home">Home</h1>
            </Link>
            <Link className="link-decoration" to="/popular">
              <h1 className="nav-link-popular">Popular</h1>
            </Link>
          </div>
        </div>
        <div className="search-user-container">
          <div className="search-input-container">
            <input
              onChange={this.onClickEnterKey}
              value={searchInputValue}
              className="search-input"
              placeholder="Search"
              type="text"
            />
            <Link to={`search/${searchInputValue}`}>
              <BiSearch className="search-icon" />
            </Link>
          </div>
          <CgMenuCheese className="menu-icon" />
          <Link to="/account/">
            <FaUserCircle className="user-icon" />
          </Link>
        </div>
      </nav>
    )
  }
}

export default Header
