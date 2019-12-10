import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import 'antd/dist/antd.css';
import {
    Form,
    Input,
    Button,
    Select
} from 'antd';
const { Option } = Select;

class SignIn extends Component {

    state = {
        email: '',
        password: ''

    }

    handleChange = (e, value) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/' />
        return (
            <div className='container'>
                <Form id='form' onSubmit={this.handleSubmit}>
                    <h5 className='grey-text text-darken-3'>Sign In</h5>
                    <Form.Item label="E-mail" htmlFor='E-mail'>
                        <Input id='email' onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item label="Password" htmlFor='Password'>
                        <Input.Password id='password' onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            Sign In
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
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);