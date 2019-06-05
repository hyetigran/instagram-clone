import React from 'react';
import '../CommentSection.css';

const commentList = props => {
	const { likes, comments } = props;
	return (
		<div className="CommentList">
			<div className="IconsWrapper">
				<div className="Icons">
					<i className="far fa-heart" />
				</div>
				<div className="Icons">
					<i className="far fa-comment" />
				</div>
			</div>
			<div>{likes} likes</div>
			{comments.map((comment, index) => (
				<div key={index} className="CommentText">
					<span>{comment.username}</span> {comment.text}
				</div>
			))}
		</div>
	);
};
export default commentList;
