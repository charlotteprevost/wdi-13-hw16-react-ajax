import React, { Component } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';


class Login extends Component {
	constructor(){
		super();

		this.state = {
			username: '',
			password: ''
		}
	}

	handleInput = (e) => {

		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		});
	}

	handleLoginSubmit = (e) => {
		e.preventDefault();
		console.log(`Login index.js --> this.state: `, this.state);
		this.props.handleLogin(this.state.username, true);
	}

	render(){
		return (
			<Grid container columns={1} textAlign='center' verticalAlign='middle' style={{height: '100%'}}>
				<Grid.Column style={{maxWidth: 500}}>
					<Segment>
						<Form>
							<Form.Input onChange={this.handleInput} fluid type='text' name='username' value={this.state.username} placeholder='Username'/>
							<Form.Input onChange={this.handleInput} fluid type='password' name='password' value={this.state.password} placeholder='Password'/>
							<Button onClick={this.handleLoginSubmit} fluid type='submit' color='blue' size='large'>Login</Button>
						</Form>
					</Segment>
				</Grid.Column>
			</Grid>
		)
	}
}

export default Login;