import React, { Component } from 'react'

class Schedule extends Component {

    state={
        currentUserName: ''

    }

    componentDidMount() {
        const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        this.setState({
            currentUserName: idToken.idToken.claims.name

        })
    }

    render() {
        const { currentUserName } = this.state;
        return (

            <div>
                <h1>{currentUserName}'s Schedule</h1>
                <p></p>
            </div>
            
        )
    }

}

export default Schedule;