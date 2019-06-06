import React from 'react';
import '../CommentSection.css';

const commentList = props => {
	const { likes, comments, toggleLike, isLiked, postId } = props;

	const onLikeClick = event => {
		event.preventDefault();
		toggleLike(postId);
	};
	return (
		<div className="CommentList">
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
		</div>
	);
};
export default commentList;
