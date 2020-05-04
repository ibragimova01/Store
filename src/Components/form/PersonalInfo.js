import React, { Component } from 'react'

export class PersonalInfo extends Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep();
  }
  render() {
    const {handleChange, lastName, firstName} = this.props;
    return (
      <>
        <h1>Введите данные</h1>
        <label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={handleChange('firstName')}
          />
        </label>
        <label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={handleChange('lastName')}
          />
        </label>
        <button className="Next" onClick={this.continue}>
          Next 
        </button>
      </>
    )
  }
}

export default PersonalInfo

