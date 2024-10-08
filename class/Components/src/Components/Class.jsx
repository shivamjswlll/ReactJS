import React, { Component } from 'react';
import './style.css';
import styles from './button.module.css';

class Class extends Component {
  render() {
    return <h1 className='styles.h1'> Hello, {this.props.name}</h1>;
  }
}

export default Class;
