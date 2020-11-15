import React from "react";
import { Button, Input, Form } from "semantic-ui-react";

class LoginPage extends React.Component {
  render() {
    const LoginWrapperStyle = {
      margin: "5rem auto",
      width: "50vw",
    };

    return (
      <div className="login-wrapper" style={LoginWrapperStyle}>
        <Form>
          <Form.Group widths={2}>
            <Form.Field>
              <label>Username or email</label>
              <Input name="username" placeholder="Username or email" />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <Input type="password" name="password" placeholder="Password" />
            </Form.Field>
          </Form.Group>

          <Button primary type="submit">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default LoginPage;
