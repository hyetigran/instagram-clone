import React from 'react';
import './PostContainer.css';
import PostHeader from './PostHeader/PostHeader';
import PostImage from './PostImage/PostImage';
import CommentSection from './CommentSection/CommentSection';
import pt from 'prop-types';

const postContainer = props => {
	//console.log(props);
	return (
		<div className="PostContainer">
			<PostHeader username={props.post.username} thumbnail={props.post.thumbnailUrl} />
			<PostImage postImage={props.post.imageUrl} />
			<CommentSection
				inputChange={props.inputChange}
				likes={props.post.likes}
				timestamp={props.post.timestamp}
				comments={props.post.comments}
				addComment={props.addComment}
				postId={props.post.id}
				form={props.form}
			/>
		</div>
	);
};

postContainer.propTypes = {
	post: pt.shape({
		username: pt.string.isRequired,
		thumbnailUrl: pt.string.isRequired,
		imageUrl: pt.string.isRequired,
		likes: pt.number.isRequired,
		comments: pt.array.isRequired,
		timestamp: pt.string.isRequired
	})
};

export default postContainer;
