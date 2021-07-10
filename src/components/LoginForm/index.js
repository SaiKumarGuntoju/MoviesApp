import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    API_KEY: 'b0c10bd24207804b5bc4163824d992f7',
    requestToken: '0bb154961e051972f87a04ef9a4c0e1193dd10d2',
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password, API_KEY, requestToken} = this.state
    const userDetails = {
      username,
      password,
      request_token: requestToken,
    }
    const url = `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${API_KEY}`
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
      headers: {
        'Content-type': 'application/json',
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
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

  renderLoginForm = () => (
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
    </div>
  )

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
