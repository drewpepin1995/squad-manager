import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Modal, Button, Form, Input } from 'antd';
import { DatePicker } from 'antd';
import { insertGame } from '../../store/actions/teamsActions';
import { connect } from 'react-redux';
import { compose } from '../../../../../../Library/Caches/typescript/3.6/node_modules/redux';
const dateFormat = 'YYYY/MM/DD HH:mm';


function onOk(value) {
  console.log('onOk: ', value);
}

class InsertGame extends Component {
  state = { 
    visible: false,
    date: '',
    opponent: ''
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

  handleTextInputChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
        this.props.insertGame(
            this.state, this.props.match.params.id
                
                
            
        )
  }

  handleDateInputChange = (date) => {
    const valueOfInput = date.format();
    this.setState({
      date: valueOfInput

    })
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Add a Game
        </Button>
        <Modal
          title="Add a Game"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form id='form' onSubmit={this.handleSubmit}>
            <DatePicker id='date' format={dateFormat} selected={this.state.date} showTime={{ format: 'HH:mm' }} placeholder="Select Time" onChange={this.handleDateInputChange} onOk={onOk} />
            <Form.Item label="Opponent" htmlFor='Opponent'>
              <Input id='opponent' onChange={this.handleTextInputChange} />
            </Form.Item>
            <Button type="primary" htmlType="submit">
              Add Game
          </Button>
          </Form>
        </Modal>

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
      insertGame: (game, teamId) => dispatch(insertGame(game, teamId))
  }
}
export default compose(
  withRouter, 
  connect(mapStateToProps, mapDispatchToProps))(InsertGame);