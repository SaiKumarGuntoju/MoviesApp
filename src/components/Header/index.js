import {Component} from 'react'
import {Link} from 'react-router-dom'
import {BiSearch} from 'react-icons/bi'
import {FaUserCircle} from 'react-icons/fa'
import './index.css'

class Header extends Component {
  state = {searchInputValue: ''}

  onChangeSearchInput = event => {
    this.setState({searchInputValue: event.target.value})
  }

  render() {
    const {searchInputValue} = this.state
    console.log(searchInputValue)
    return (
      <nav className="nav-container">
        <div className="header-links">
          <Link className="link-decoration" to="/">
            <h1 className="header-movie-heading">MOVIES</h1>
          </Link>
          <Link className="link-decoration" to="/">
            <h1 className="nav-link-home">Home</h1>
          </Link>
          <Link className="link-decoration" to="/popular">
            <h1 className="nav-link-popular">Popular</h1>
          </Link>
        </div>
        <div className="search-user-container">
          <div className="search-input-container">
            <input
              onChange={this.onChangeSearchInput}
              className="search-input"
              placeholder="Search"
              type="text"
            />
            <BiSearch className="search-icon" />
          </div>
          <FaUserCircle className="user-icon" />
        </div>
      </nav>
    )
  }
}

export default Header
