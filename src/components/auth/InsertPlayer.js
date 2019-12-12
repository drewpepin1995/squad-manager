import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Modal, Button, Form, Input } from 'antd';
import { insertPlayer } from '../../store/actions/teamsActions';
import { connect } from 'react-redux';
import { compose } from '../../../../../../Library/Caches/typescript/3.6/node_modules/redux';
class InsertPlayer extends Component {


    state = {
        visible: false,
        playerFirstName: '',
        playerLastName: '',
        playerDues: ''
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.insertPlayer(
            this.state, this.props.match.params.id
                
                
            
        )
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal}>
                    Add a Player
        </Button>
                <Modal
                    title="Add a Player"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form id='form' onSubmit={this.handleSubmit}>
                        <h5 className='grey-text text-darken-3'>Player Details</h5>
                        <Form.Item label="Player First Name" htmlFor='Player First Name'>
                            <Input id='playerFirstName' onChange={this.handleChange} />
                        </Form.Item>
                        <Form.Item label="Player Last Name" htmlFor='Player Last Name'>
                            <Input id='playerLastName' onChange={this.handleChange} />
                        </Form.Item>
                        <Form.Item label="Player Dues" htmlFor='Player Dues'>
                            <Input id='playerDues' onChange={this.handleChange} />
                        </Form.Item>
                        <Form.Item >
                            <Button type="primary" htmlType="submit">
                                Add Player
          </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        insertPlayer: (player, teamId) => dispatch(insertPlayer(player, teamId))
    }
}
export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps))(InsertPlayer);
