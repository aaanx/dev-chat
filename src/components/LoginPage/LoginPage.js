import React from "react";
import { Button, Input, Form, Container } from "semantic-ui-react";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.state = {
      loginData: {
        username: "",
        password: "",
      },
    };
  }

  handleLoginChange = (e, { value, name }) => {
    this.setState({
      formData: {
        [name]: value,
      },
    });
  };

  handleLoginSubmit = () => {
    const { username, password } = this.state.loginData;
    this.setState({ formData: { username: username, password: password } });
    //send to firebase
  };

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
                <label>Username or email</label>
                <Input
                  type="text"
                  name="username"
                  placeholder="Username or email"
                  onChange={this.handleLoginChange}
                />
              </Form.Field>
              <Form.Field required>
                <label>Password</label>
                <Input
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
