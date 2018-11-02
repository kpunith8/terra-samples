import React, { Component } from 'react';
import AbstractModal from 'terra-abstract-modal';
import LoginForm from './LoginForm';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: true,
    };
  }

  handleOpenModal = () => {
    this.setState({ isOpen: true });
  }

  handleCloseModal = () => {
    this.setState({ isOpen: false });
  }

  onLoginSuccess = () => {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div>
        <AbstractModal
          ariaLabel="My Modal"
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
          closeOnEsc
        >
          <div style={{ width: '480px', height: '340px', backgroundColor: 'white' }}>
            <LoginForm
              onClose={this.handleCloseModal}
              onCancel={this.handleCloseModal}
              onLoginSucess={this.onLoginSuccess}
            />
          </div>
        </AbstractModal>
      </div>
    );
  }
}
