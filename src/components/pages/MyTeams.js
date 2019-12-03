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
        return (
            console.log(this.state),
            <div>
            </div>
        )
    }

}

export default myTeams;