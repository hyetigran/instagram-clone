import React from 'react';
import styled from 'styled-components';

const CommentListDiv = styled.div`
	display: flex;
	flex-flow: column;
	align-content: flex-start;
	margin-left: 1.5%;

	.IconsWrapper {
		display: flex;
		flex-flow: row;

		.Icons {
			margin: 1.5%;
		}
	}
	.CommentText {
		padding: 5px 0;

		span {
			font-weight: bold;
		}
	}
`;

const commentList = props => {
	const { likes, comments, toggleLike, isLiked, postId } = props;

	const onLikeClick = event => {
		event.preventDefault();
		toggleLike(postId);
	};
	return (
		<CommentListDiv>
			<div className="IconsWrapper">
				<div onClick={onLikeClick} className="Icons">
					{isLiked ? <i className="fas fa-heart" /> : <i className="far fa-heart" />}
				</div>
				<div className="Icons">
					<i className="far fa-comment" />
				</div>
			</div>
			<div>{likes} likes</div>
			{comments.map(comment => (
				<div key={comment.id} className="CommentText">
					<span>{comment.username}</span> {comment.text}
				</div>
			))}
		</CommentListDiv>
	);
};
export default commentList;
