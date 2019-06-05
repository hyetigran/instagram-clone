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
	currentPostId: null,
	search: '',
	isSearching: false,
	isLiked: false
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
	addLike = () => {
		let newLike = this.state.posts.like + 1
		this.setState({ isLiked: !this.state.isLiked});
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
		this.setState({ isSearching: true });
	};

	render() {
		let filteredPosts = this.state.posts.filter(post => {
			return post.username.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
		});

		return (
			<div className="App">
				<SearchBar inputSearch={this.inputSearchChange} search={this.state.search} />
				{filteredPosts.map(post => (
					<PostContainer
						key={post.timestamp}
						post={post}
						form={this.state.form}
						inputChange={this.inputChange}
						addComment={this.addComment}
						addLike={this.addLike}
						isLiked={this.state.isLiked}
					/>
				))}
			</div>
		);
	}
}

export default App;
