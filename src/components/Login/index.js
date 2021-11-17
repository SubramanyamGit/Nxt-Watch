import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  CustomContainer,
  Logo,
  Form,
  InputContainer,
  Label,
  Input,
  CheckboxContainer,
  Checkbox,
  Label2,
  LoginButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrorMessage: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMessage: true, errorMsg})
  }

  onLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onCheckboxChanges = event => {
    this.setState({showPassword: event.target.checked})
  }

  onPasswordEntered = event => {
    this.setState({password: event.target.value})
  }

  onUsernameEntered = event => {
    this.setState({username: event.target.value})
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <InputContainer>
              <Label htmlFor="password" isDarkMode={isDarkMode}>
                PASSWORD
              </Label>
              <Input
                type={inputType}
                value={password}
                onChange={this.onPasswordEntered}
                placeholder="Password"
                id="password"
                isDarkMode={isDarkMode}
              />
              <CheckboxContainer>
                <Checkbox
                  type="checkbox"
                  id="checkbox"
                  onChange={this.onCheckboxChanges}
                />
                <Label2 htmlFor="checkbox" isDarkMode={isDarkMode}>
                  Show Password
                </Label2>
              </CheckboxContainer>
            </InputContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <InputContainer>
              <Label htmlFor="username" isDarkMode={isDarkMode}>
                USERNAME
              </Label>
              <Input
                type="input"
                value={username}
                onChange={this.onUsernameEntered}
                placeholder="Username"
                id="username"
                isDarkMode={isDarkMode}
              />
            </InputContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const {errorMsg, showErrorMessage} = this.state
          const token = Cookies.get('jwt_token')
          if (token !== undefined) {
            return <Redirect to="/" />
          }
          return (
            <CustomContainer isDarkMode={isDarkMode}>
              <Form onSubmit={this.onLogin} isDarkMode={isDarkMode}>
                <Logo
                  src={
                    isDarkMode
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                {this.renderUsernameField()}
                {this.renderPasswordField()}
                <LoginButton type="submit">Login</LoginButton>
                {showErrorMessage && <ErrorMessage>*{errorMsg}</ErrorMessage>}
              </Form>
            </CustomContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
