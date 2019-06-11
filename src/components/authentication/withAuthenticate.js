import React from 'react';

const withAuthenticate = Component => Login => {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				isAuthed: false
			};
		}
		componentDidMount() {
			const isAuthed = !!localStorage.getItem('username');
			this.setState({
				isAuthed
			});
		}
		render() {
			if (this.state.isAuthed) {
				return <Component isAuthed={this.state.isAuthed} {...this.props} />;
			}
			return <Login />;
		}
	};
};
export default withAuthenticate;
