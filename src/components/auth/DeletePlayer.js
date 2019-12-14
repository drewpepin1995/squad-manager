import React, { Component } from 'react'
import { deletePlayer } from '../../store/actions/teamsActions';
import { connect } from 'react-redux';
import { compose } from '../../../../../../Library/Caches/typescript/3.6/node_modules/redux';
import { withRouter } from 'react-router-dom';



class DeletePlayer extends Component {

    handleClick = (e) => {
        e.preventDefault();
        this.props.deletePlayer(
            this.props.playerId, 
            this.props.teamId
    
    
        )
    }


    render() {
        return (
            <div>
                <span
                  onClick={this.handleClick} 
                >
                  <a>Delete</a>
                  </span>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    console.log(ownProps)
    return {
        auth: state.firebase.auth,
        playerId: ownProps.playerId,
        teamId: ownProps.teamId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePlayer: (playerId, teamId) => dispatch(deletePlayer(playerId, teamId))
    }
}
export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps))(DeletePlayer);

