import React, { Component } from 'react';

class Members extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      members: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getMembers();
  }

  // Retrieves the list of items from the Express app
  getMembers = () => {
    fetch('/api/members')
      .then(res => res.json())
      .then(members => this.setState({ members }))
  }

  render() {
    const { members } = this.state;

    return (
      <div className="App">
        <h1>List of Members</h1>
        {/* Check to see if any items are found*/}
        {members.length ? (
          <div>

            <div>
              {JSON.stringify(members)};
                </div>

          </div>
        ) : (
            <div>
              <h2>No Members Found ...</h2>
            </div>
          )
        }
      </div>
    );
  }
}

export default Members;