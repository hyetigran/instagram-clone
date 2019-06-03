import React from 'react';
import './PostContainer.css';
import PostHeader from './PostHeader/PostHeader';

const postContainer = props => {
	//console.log(props);
	return (
		<div className="PostContainer">
			<PostHeader username={props.post.username} thumbnail={props.post.thumbnailUrl} />
			<div>Post Image</div>
			<div>CommentSection</div>
		</div>
	);
};

export default postContainer;
