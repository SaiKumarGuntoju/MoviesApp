import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    API_KEY: 'b0c10bd24207804b5bc4163824d992f7',
    showErrorMsg: false,
  }

  onSubmitSuccess = requestToken => {
    const {history} = this.props
    Cookies.set('request_token', requestToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = error => {
    this.setState({showErrorMsg: true, errorMsg: error})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password, API_KEY} = this.state

    const getRequestTokenUrl = `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`
    const option = {
      method: 'GET',
    }
    const getTokenResponse = await fetch(getRequestTokenUrl, option)
    const tokenData = await getTokenResponse.json()

    const loginUrl = `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${API_KEY}`
    const userDetails = {
      username,
      password,
      request_token: tokenData.request_token,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-type': 'application/json',
      },
    }
    const response = await fetch(loginUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.request_token)
    } else {
      this.onSubmitFailure(data.status_message)
    }
  }

  onChangePassword = event => this.setState({password: event.target.value})

  onChangeUsername = event => this.setState({username: event.target.value})

  renderPasswordElement = () => (
    <div className="input-container">
      <label className="input-label" htmlFor="password">
        Password
      </label>
      <input
        onChange={this.onChangePassword}
        className="username-input"
        type="password"
        id="password"
      />
    </div>
  )

  renderUsernameElement = () => (
    <div className="input-container">
      <label className="input-label" htmlFor="username">
        Username
      </label>
      <input
        onChange={this.onChangeUsername}
        className="username-input"
        type="text"
        id="username"
      />
    </div>
  )

  renderLoginForm = () => {
    const {showErrorMsg, errorMsg} = this.state
    return (
      <div className="login-card-container">
        <form onSubmit={this.onSubmitForm}>
          <h1 className="sign-in-title">Sign In</h1>
          {this.renderUsernameElement()}
          {this.renderPasswordElement()}
          <div className="button-container">
            <button className="signin-button" type="submit">
              LogIn
            </button>
          </div>
        </form>
        {showErrorMsg && <p className="errorNote">{errorMsg}</p>}
      </div>
    )
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="movies-heading">MOVIES</h1>
        <div className="login-page-container">{this.renderLoginForm()}</div>
      </div>
    )
  }
}

export default LoginForm
