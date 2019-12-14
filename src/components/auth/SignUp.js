import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Button,
  Select
} from 'antd';
const { Option } = Select;


class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    managerPlayer: ''

  }

  handleTextInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,

    })
  }
  handleSelectInputChange = (value) => {
    this.setState({
      managerPlayer: value

    })
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (
      <div className="container">
        <Form id='form' onSubmit={this.handleSubmit}>
        <h5 className='grey-text text-darken-3'>Sign Up</h5>
          <Form.Item label="First Name" htmlFor='firstName'>
            <Input id='firstName' onChange={this.handleTextInputChange} />
          </Form.Item>
          <Form.Item label="Last Name" htmlFor='lastName'>
            <Input id='lastName' onChange={this.handleTextInputChange} />
          </Form.Item>
          <Form.Item label="E-mail" htmlFor='email'>
            <Input id='email' onChange={this.handleTextInputChange} />
          </Form.Item>
          <Form.Item label="Password" htmlFor='password'>
            <Input.Password id='password' onChange={this.handleTextInputChange} />
          </Form.Item>
          <Form.Item label="Manager or Player" htmlFor='managerPlayer'>
            <Select id='managerPlayer' onChange={this.handleSelectInputChange}>
              <Option value="manager">Manager</Option>
              <Option value="player">Player</Option>
            </Select>,
        </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit">
              Register
          </Button>
          </Form.Item>
          <div className='red-text center'>
            {authError ? <p>{authError}</p> : null}
          </div>
        </Form>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);