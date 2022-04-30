import './index.css'
import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameRequired: false,
    lastNameRequired: false,
    firstNameBorder: 'inputEl',
    lastnameBorder: 'inputEl',
  }

  onFirstnameTyping = event => {
    this.setState({firstName: event.target.value})
  }

  onLastnameTyping = event => {
    this.setState({lastName: event.target.value})
  }

  onblurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstNameRequired: true, firstNameBorder: 'inputEl2'})
      console.log('blurred')
    } else {
      this.setState({firstNameRequired: false, firstNameBorder: 'inputEl'})
    }
  }

  onblurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastNameRequired: true, lastnameBorder: 'inputEl2'})
      console.log('blurred2')
    } else {
      this.setState({lastNameRequired: false, lastnameBorder: 'inputEl'})
    }
  }

  totalPageRender = () => {}

  render() {
    const {
      firstName,
      lastName,
      lastNameRequired,
      firstNameRequired,
      firstNameBorder,
      lastnameBorder,
    } = this.state
    return (
      <div className="totalContainer">
        <div className="contentContainer">
          <h1 className="heading">Registration</h1>
          <div className="inputsContainer">
            <form className="formContainer">
              <label className="labelText" htmlFor="firstNameInput">
                FIRST NAME
              </label>
              <input
                className={`${firstNameBorder}`}
                type="text"
                placeholder="First Name"
                onChange={this.onFirstnameTyping}
                value={firstName}
                onBlur={this.onblurFirstName}
                id="firstNameInput"
              />
              {firstNameRequired && <p className="reqText">Required</p>}

              <label className="labelTextL" htmlFor="lastNameInput">
                LAST NAME
              </label>
              <input
                className={`${lastnameBorder}`}
                type="text"
                placeholder="Last Name"
                onChange={this.onLastnameTyping}
                value={lastName}
                onBlur={this.onblurLastName}
                id="lastNameInput"
              />
              {lastNameRequired && <p className="reqText">Required</p>}
              <button className="submitButton" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default RegistrationForm
