import React from 'react';
import './PostContainer.css';
import PostHeader from './PostHeader/PostHeader';
import PostImage from './PostImage/PostImage';

const postContainer = props => {
	//console.log(props);
	return (
		<div className="PostContainer">
			<PostHeader username={props.post.username} thumbnail={props.post.thumbnailUrl} />
			<PostImage postImage={props.post.imageUrl} />
			<div>CommentSection</div>
		</div>
	);
};

export default postContainer;
