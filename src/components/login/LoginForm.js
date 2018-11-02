import React, { Component } from 'react';
import Input from 'terra-form-input';
import Button from 'terra-button';
import classNames from 'classnames/bind';
import IconClose from 'terra-icon/lib/icon/IconClose';
import styles from './login.css';

const cx = classNames.bind(styles);

export default class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isValidUserName: false,
      isValidPassword: false,
      disableLogin: true,
    }
  }

  handleUserNameChange = (event) => {
    if (event.target.value.length >= 3) {
      this.setState({ isValidUserName: true, disableLogin: false })
    }
  }

  handlePasswordChange = (event) => {
    if (event.target.value.length >= 3) {
      this.setState({ isValidPassword: true, disableLogin: false })
    }
  }

  onLoginClick = () => {
    this.props.onLoginSucess();
  }

  onCancelClick = () => {
    this.props.onCancel();
  }

  onIconClose = () => {
    this.props.onClose();
  }

  render() {
    return (
      <div style={{ padding: '10px' }}>
        <div className={cx('icon-close')} onClick={this.onIconClose}>
          <IconClose />
        </div>
        <h1 className={cx('login-header')}>Login</h1>
        <div className={cx('input-field')}>
          <Input
            className={cx('user-name')}
            type='text' name='username'
            placeholder='User Name'
            onChange={this.handleUserNameChange}
            isrequired
          />
          <Input
            className={cx('password')}
            type='password'
            name='password'
            placeholder='Password'
            onChange={this.handlePasswordChange}
            isrequired
          />
        </div>
        <div className='button-container'>
          <Button
            text='Login'
            className={cx('button', 'login')}
            variant='emphasis'
            onClick={this.onLoginClick}
            isDisabled={this.state.disableLogin}
          />
          <Button
            text='Cancel'
            className={cx('button', 'cancel')}
            variant='neutral'
            onClick={this.onCancelClick}
            required
          />
        </div>
      </div >
    );
  }
}
