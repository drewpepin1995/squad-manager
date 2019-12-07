import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTeam } from '../../store/actions/teamsActions';


class RegisterTeam extends Component {

    state = {
        name: '',
        sport: ''
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createTeam(this.state)
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>Register a Team</h5>
                    <div className='input-field'>
                        <label htmlFor='name'>Team Name</label>
                        <input type='text' id='name' onChange={this.handleChange}/>
                        
                    </div>
                    <div className='input-field'>
                        <label htmlFor='sport'>Sport</label>
                        <input type='text' id='sport' onChange={this.handleChange}/>
                        
                    </div>
                    <div className="input-field">
                        <button className='btn purple lighten-1 z-depth-0'>Register</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTeam: (team) => dispatch(createTeam(team))
    }
}
export default connect(null, mapDispatchToProps)(RegisterTeam);