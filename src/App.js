import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

const initialState = {
	posts: dummyData,
	isLoading: true
};

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	render() {
		// console.log(this.state);
		return (
			<div className="App">
				<SearchBar />
				{this.state.posts.map(post => <PostContainer key={post.id} post={post} />)}
			</div>
		);
	}
}

export default App;
