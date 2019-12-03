import React, { Component } from 'react'

class myTeams extends Component {

    state={
        currentUserName: '',
        currentUserEmail: ''
    }

    componentDidMount() {
        const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        this.setState({
            currentUserEmail: idToken.idToken.claims.email,
            currentUserName: idToken.idToken.claims.name

        })
    }

    render() {
        const { currentUserName, currentUserEmail } = this.state;
        return (

            <div>
                <h1>Welcome {currentUserName}</h1>
                <p>Email: {currentUserEmail}</p>
                <p>Welcome to "my teams" page.</p>
            </div>
            
        )
    }

}

export default myTeams;