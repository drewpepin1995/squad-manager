import React, { Component } from 'react'

class Dues extends Component {

    state={
        currentUserName: ''

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
                <h1>{currentUserName}'s Dues</h1>
                <p></p>
            </div>
            
        )
    }

}

export default Dues;