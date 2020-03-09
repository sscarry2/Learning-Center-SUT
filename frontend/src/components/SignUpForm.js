import React, { Component } from 'react';
import api, { setToken } from '../api/init';
import { getDecodedToken } from '../api/token';
export default class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.onFileChange = this.onFileChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      userImage: ''
    };
  }
  onFisrtNameChange = event => {
    this.setState({
      firstName: event.target.value
    });
  };
  onLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    });
  };
  onEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };
  onPasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };
  onFileChange(e) {
    this.setState({ userImage: e.target.files[0] });
    
  }
  onSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('firstName', this.state.firstName);
    formData.append('lastName', this.state.lastName);
    formData.append('email', this.state.email);
    formData.append('password', this.state.password);
    formData.append('userImage', this.state.userImage);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    api
      .post('/auth/sign-up', formData, config)
      .then(res => {
        alert('Register Successful !!');
        window.location.reload();
        const token = res.data.token;
        setToken(token);
        return getDecodedToken();
      })
      .catch(res => {
        if (res.response.status === 400 || res.response.status === 401) {
          alert(
            'There was an error with your email or password. Please try again.'
          );
        } else {
          alert('server error');
        }
      });
  }
  render() {
    return (
      <form className='form--signin' onSubmit={this.onSubmit}>
        <div className='form__group' encType='multipart-form-data'>
          <label className='form__label form__label--padding'>
            {'First Name'}
            <input
              type='text'
              name='firstName'
              className='form__input'
              required
              value={this.state.firstName}
              onChange={this.onFisrtNameChange}
            />
          </label>
        </div>
        <div className='form__group'>
          <label className='form__label form__label--padding'>
            {'Last Name'}
            <input
              type='text'
              name='lastName'
              className='form__input'
              required
              value={this.state.lastName}
              onChange={this.onLastNameChange}
            />
          </label>
        </div>
        <div className='form__group'>
          <label className='form__label form__label--padding'>
            {'Email'}
            <input
              type='email'
              name='email'
              className='form__input'
              required
              value={this.state.email}
              onChange={this.onEmailChange}
            />
          </label>
        </div>
        <div className='form__group'>
          <label className='form__label form__label--padding'>
            {'Password'}
            <input
              type='password'
              name='password'
              className='form__input'
              required
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
          </label>
        </div>
        <div className='form__group'>
          <label className='form__label form__label--padding'>
            {'Upload StudentID card'}
            <input
              type='file'
              name='userImage'
              className='form__input'
              onChange={this.onFileChange}
              required
            />
          </label>
        </div>
        <button className='button button__form--submit' type='submit'>
          Sign up
        </button>
      </form>
    );
  }
}
