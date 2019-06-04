import React from 'react';
import './PostContainer.css';
import PostHeader from './PostHeader/PostHeader';
import PostImage from './PostImage/PostImage';
import CommentSection from './CommentSection/CommentSection';

const postContainer = props => {
	//console.log(props);
	return (
		<div className="PostContainer">
			<PostHeader username={props.post.username} thumbnail={props.post.thumbnailUrl} />
			<PostImage postImage={props.post.imageUrl} />
			<CommentSection likes={props.post.likes} timestamp={props.post.timestamp} comments={props.post.comments} />
		</div>
	);
};

export default postContainer;
