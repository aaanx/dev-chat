import React from "react";
import fire from "../../config/Fire";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        <h1>You are at the HomePage</h1>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default HomePage;
