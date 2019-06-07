import React from 'react';

class Login extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		};
	}
	inputLoginChange = event => this.setState({ ...this.state, [event.target.name]: event.target.value });

	loginHandler = async event => {
		event.preventDefault();
		const { username, password } = this.state;
		if (username === 'Tigran' || password === '12345') {
			await localStorage.setItem('username', username);
			//window.location.reload();
		}
	};
	render() {
		const { username, password } = this.state;
		return (
			<form onSubmit={this.loginHandler}>
				<input
					type="text"
					name="username"
					value={username}
					onChange={this.inputLoginChange}
					className="InputUsername"
					placeholder="Username"
				/>
				<input
					type="password"
					name="password"
					value={password}
					onChange={this.inputLoginChange}
					className="InputPassword"
					placeholder="password"
				/>
				<button type="submit">Log In</button>
			</form>
		);
	}
}

export default Login;
