import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Modal, Button, Form, Input } from 'antd';
import { DatePicker } from 'antd';
import { insertGame } from '../../store/actions/teamsActions';
import { connect } from 'react-redux';
import { compose } from '../../../../../../Library/Caches/typescript/3.6/node_modules/redux';
import { TimePicker } from 'antd';
import moment from 'moment';
const dateFormat = 'YYYY/MM/DD';


function onOk(value) {
  console.log('onOk: ', value);
}

class InsertGame extends Component {
  state = { 
    visible: false,
    date: '',
    time: '',
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
    this.setState({
      visible: false
    })
  }

  handleDateInputChange = (date) => {
    const valueOfInput = date.format("YYYY/MM/DD");
    this.setState({
      date: valueOfInput

    })
  }

  handleTimeInputChange = (time) => {
    const valueOfInput = time.format("HH:mm");
    this.setState({
      time: valueOfInput

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
            <DatePicker id='date' format={dateFormat} selected={this.state.date} placeholder="Select Day" onChange={this.handleDateInputChange} onOk={onOk} />
            <TimePicker id='time' defaultOpenValue={moment('00:00', 'HH:mm')} selected={this.state.time} onChange={this.handleTimeInputChange}/>,
            <Form.Item label="Opponent" htmlFor='Opponent'>
              <Input id='opponent' onChange={this.handleTextInputChange} placeholder="Opponent Team Name" />
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