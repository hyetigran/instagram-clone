import React from 'react';
import PostHeader from './PostHeader/PostHeader';
import PostImage from './PostImage/PostImage';
import CommentSection from './CommentSection/CommentSection';
import pt from 'prop-types';
import styled from 'styled-components';

const PostContainerDiv = styled.div`
	display: flex;
	flex-flow: column;
	margin: auto;
	margin-bottom: 4%;
	border: 1px solid grey;
	width: 60%;
	justify-content: center;
	border-radius: 4px;
`;

const postContainer = props => {
	return (
		<PostContainerDiv>
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
				toggleLike={props.toggleLike}
				isLiked={props.isLiked}
			/>
		</PostContainerDiv>
	);
};

postContainer.propTypes = {
	post: pt.shape({
		username: pt.string.isRequired,
		thumbnailUrl: pt.string.isRequired,
		imageUrl: pt.string.isRequired,
		likes: pt.number.isRequired,
		comments: pt.array.isRequired,
		timestamp: pt.string.isRequired,
		isLiked: pt.bool.isRequired
	})
};

export default postContainer;
