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
    isSubmitted: false,
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

  totalPageRender = () => {
    const {
      firstName,
      lastName,
      lastNameRequired,
      firstNameRequired,
      firstNameBorder,
      lastnameBorder,
    } = this.state
    return (
      <>
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
      </>
    )
  }

  successRender = () => (
    <div className="successContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="imgSize"
      />
      <p>Submitted Successfully</p>
    </div>
  )

  validateLastName = () => {
    const {lastName} = this.state

    return lastName !== ''
  }

  validateFirstName = () => {
    const {firstName} = this.state

    return firstName !== ''
  }

  onSubmitClick = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      event.preventDefault()
      this.setState(prevVal => ({
        isSubmitted: !prevVal.isSubmitted,
        firstName: '',
        lastName: '',
        firstNameBorder: 'inputEl',
        lastnameBorder: 'inputEl',
      }))
    } else {
      this.setState({
        firstName: '',
        lastName: '',
        firstNameRequired: !this.validateFirstName(),
        lastNameRequired: !this.validateLastName(),
        firstNameBorder: 'inputEl2',
        lastnameBorder: 'inputEl2',
        isSubmitted: false,
      })
    }
  }

  render() {
    let buttonText
    const {isSubmitted} = this.state
    if (isSubmitted === true) {
      buttonText = 'Submit Another Response'
    } else {
      buttonText = 'Submit'
    }

    return (
      <div className="totalContainer">
        <div className="contentContainer">
          <h1 className="heading">Registration</h1>
          <div className="inputsContainer">
            <form className="formContainer">
              {isSubmitted ? this.successRender() : this.totalPageRender()}
              <button
                className="submitButton"
                type="submit"
                onClick={this.onSubmitClick}
              >
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default RegistrationForm
