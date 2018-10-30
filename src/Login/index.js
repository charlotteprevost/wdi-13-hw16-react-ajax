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

	render(){
		return (
			<Grid container columns={1} textAlign='center' verticalAlign='middle' style={{height: '100%'}}>
				<Grid.Column style={{maxWidth: 500}}>
					<Segment>
						<Form>
							<Form.Input fluid type='text' name='username' value={this.state.username} placeholder='Username'/>
							<Form.Input fluid type='password' name='password' value={this.state.password} placeholder='Password'/>
							<Button fluid type='submit' color='blue' size='large'>Login</Button>
						</Form>
					</Segment>
				</Grid.Column>
			</Grid>
		)
	}
}

export default Login;