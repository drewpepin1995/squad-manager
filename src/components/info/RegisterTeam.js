import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTeam } from '../../store/actions/teamsActions';
import { Redirect } from 'react-router-dom';

import 'antd/dist/antd.css';
import {
    Form,
    Input,
    Button
} from 'antd';


class RegisterTeam extends Component {

    state = {
        name: '',
        sport: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createTeam(this.state)
        this.props.history.push('/');
    }

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className='container'>
            <Form id='form' onSubmit={this.handleSubmit}>
                <h5 className='grey-text text-darken-3'>Team Registration</h5>
                <Form.Item label="Team Name" htmlFor='Team Name'>
                    <Input id='name' onChange={this.handleChange} />
                </Form.Item>
                <Form.Item label="Sport" htmlFor='Sport'>
                    <Input id='sport' onChange={this.handleChange} />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Create
          </Button>
                </Form.Item>
            </Form>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTeam: (team) => dispatch(createTeam(team))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterTeam);