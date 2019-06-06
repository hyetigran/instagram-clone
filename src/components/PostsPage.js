import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import PostContainer from './PostContainer/PostContainer';

const PostsPage = ({ posts, form, inputChange, addComment, toggleLike, isLiked, search, inputSearch }) => {
	let filteredPosts = posts.filter(post => {
		return post.username.toLowerCase().indexOf(search.toLowerCase()) !== -1;
	});
	return (
		<div className="App">
			<SearchBar inputSearch={inputSearch} search={search} />
			{filteredPosts.map(post => (
				<PostContainer
					key={post.timestamp}
					post={post}
					form={form}
					inputChange={inputChange}
					addComment={addComment}
					toggleLike={toggleLike}
					isLiked={isLiked}
				/>
			))};
		</div>
	);
};
export default PostsPage;
