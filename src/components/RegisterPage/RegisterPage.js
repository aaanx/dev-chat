import React from 'react';
import { Input, Divider, Form, Label, Container, Message } from 'semantic-ui-react'

class RegisterPage extends React.Component {
    constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
        formData: {
            nickName: '', 
            email: '', 
            password: '', 
            passwordConfirm: ''
        }
    }
}

handleChange = (e, { value, name }) => {
this.setState({
    formData: {
        [name]: value
    }
})
}

handleSubmit = () => {
const {nickName, email, password} = this.state.formData;
this.setState({formData: {nickName: nickName, email: email, password: password }});
//send to firebase
}


render() { 

const {nickName, email, password, passwordConfirm} = this.state.formData;

const RegisterWrapperStyle = {
    margin: "5rem auto",
    width: "80vw"
}

return ( 
    <div className="register-wrapper" style={RegisterWrapperStyle}>
        <Container>
            <h1>Create Account</h1>
            <Form onSubmit={this.handleSubmit} loading={false} noValidate>
            <Form.Group widths='equal'>
                <Form.Field className="nickName" required>
                <label>Nick Name</label>
                    <Input 
                        type="text" 
                        className="" 
                        placeholder="Enter your nick name" 
                        name="nickName" 
                        value={nickName}
                        onChange={this.handleChange} 
                        size="small" 
                        noValidate
                    />
                    <Label pointing>Please enter your nick name</Label>
                </Form.Field>
                <Form.Field className="email" required>
                <label>Email</label>
                    <Input 
                        type="text" 
                        className="" 
                        placeholder="Enter your email" 
                        name="email" 
                        value={email}
                        onChange={this.handleChange} 
                        size="small" 
                        noValidate
                    />
                    <Label pointing>Please enter your email</Label>
                </Form.Field>
                </Form.Group>
                <Divider horizontal/>
                <Form.Group widths='equal'>
                <Form.Field className="password" required>
                <label>Password</label>
                    <Input 
                        type="password" 
                        className="" 
                        placeholder="Enter your password" 
                        name="password" 
                        value={password}
                        onChange={this.handleChange} 
                        size="small" 
                        noValidate
                    />
                    <Label pointing>Please enter your password</Label>
                </Form.Field>
                <Form.Field className="passwordConfirm" required>
                <label>Password confirmation</label>
                    <Input 
                        type="password" 
                        className="" 
                        placeholder="Enter your password again" 
                        name="passwordConfirm" 
                        value={passwordConfirm}
                        onChange={this.handleChange} 
                        size="small" 
                        noValidate
                    />
                    <Label pointing>Please confirm your password</Label>
                </Form.Field>
                </Form.Group>
                <Divider horizontal/>
                <Form.Button primary content="Submit"/>
            </Form>
            <Divider horizontal/>
            {/* <strong>onChange:</strong>
            <pre>{JSON.stringify({ nickName, email, password, passwordConfirm }, null, 2)}</pre>
            <strong>onSubmit:</strong>
            <pre>{JSON.stringify({ nickName, email, password}, null, 2 )}</pre> */}
        </Container>
</div>
    );
}
}

export default RegisterPage;