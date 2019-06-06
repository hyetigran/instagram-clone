import React from 'react';
import './App.css';

import dummyData from './dummy-data';
import uuid from 'uuid';
import PostsPage from './components/PostsPage';
import withAuthenticate from './components/authentication/withAuthenticate';
import Login from './components/login/Login';

const preprocessData = data =>
	dummyData.map(post => ({
		...post,
		id: uuid(),
		isLiked: false,
		comments: post.comments.map(comment => ({
			...comment,
			id: uuid()
		}))
	}));

const initialCommentState = {
	commentValue: ''
};

const initialState = {
	posts: preprocessData(dummyData),
	isLoading: true,
	form: initialCommentState,
	search: '',
	username: ''
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	addComment = postId => {
		this.setState(state => {
			if (state.form.commentValue.trim()) {
				const newComment = {
					id: uuid(),
					username: 'test',
					text: this.state.form.commentValue
				};
				const postsWithComment = state.posts.map(
					post =>
						post.id === postId
							? {
									...post,
									comments: post.comments.concat(newComment)
								}
							: post
				);
				return {
					posts: postsWithComment,
					form: initialCommentState
				};
			}
		});
	};

	toggleLike = postId => {
		this.setState({
			posts: this.state.posts.map(
				post =>
					post.id === postId
						? {
								...post,
								likes: post.likes + (post.isLiked ? -1 : 1),
								isLiked: !post.isLiked
							}
						: post
			)
		});
	};

	inputChange = (value, field) => {
		this.setState(state => ({
			form: {
				...state.form,
				[field]: value
			}
		}));
	};

	inputSearchChange = event => {
		this.setState({ search: event.target.value.substr(0, 20) });
	};

	render() {
		const ComponentWithAuthenticate = withAuthenticate(PostsPage)(Login);
		return (
			<ComponentWithAuthenticate
				inputSearch={this.inputSearchChange}
				search={this.state.search}
				posts={this.state.posts}
				form={this.state.form}
				inputChange={this.inputChange}
				addComment={this.addComment}
				toggleLike={this.toggleLike}
				isLiked={this.state.isLiked}
			/>
		);
	}
}

export default App;
