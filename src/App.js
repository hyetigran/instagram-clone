import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';
import uuid from 'uuid';

const preprocessData = data =>
	dummyData.map(post => ({
		...post,
		id: uuid(),
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
	currentPostId: null
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
	inputChange = (value, field) => {
		this.setState(state => ({
			form: {
				...state.form,
				[field]: value
			}
		}));
	};

	render() {
		// console.log(this.state);
		return (
			<div className="App">
				<SearchBar />
				{this.state.posts.map(post => (
					<PostContainer
						key={post.timestamp}
						post={post}
						form={this.state.form}
						inputChange={this.inputChange}
						addComment={this.addComment}
					/>
				))}
			</div>
		);
	}
}

export default App;
