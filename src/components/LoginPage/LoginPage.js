import React from "react";
import { Button, Input, Form, Container } from "semantic-ui-react";
import fire from "../../config/Fire";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleLoginChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {})
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const LoginWrapperStyle = {
      margin: "5rem auto",
      width: "50vw",
    };

    return (
      <div className="login-wrapper" style={LoginWrapperStyle}>
        <Container>
          <h1> Log In </h1>
          <Form onSubmit={this.handleLoginSubmit}>
            <Form.Group widths={2}>
              <Form.Field required>
                <label>Email</label>
                <Input
                  value={this.state.email}
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleLoginChange}
                />
              </Form.Field>
              <Form.Field required>
                <label>Password</label>
                <Input
                  value={this.state.password}
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleLoginChange}
                />
              </Form.Field>
            </Form.Group>

            <Button primary type="submit">
              Login
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default LoginPage;
