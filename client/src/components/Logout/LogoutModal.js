import React, { Component } from 'react';
import './logoutModal.css';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handkeCLick = () => {
    this.props.onClose();
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  render() {
    return (
      <>
        <div onClick={this.handkeCLick} className="Overlay"></div>
        <div className="Modal">{this.props.children}</div>
      </>
    );
  }
}
