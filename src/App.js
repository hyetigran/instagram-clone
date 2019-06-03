import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = dummyData;
	}
	render() {
		return (
			<div className="App">
				<SearchBar />
				{this.state.map(post => <PostContainer key={post.id} post={post} />)}
			</div>
		);
	}
}

export default App;
