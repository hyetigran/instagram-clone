import React from 'react';
import './CommentSection.css';
import CommentList from './CommentList/CommentList';
import CommentTime from './CommentTime/CommentTime';
import CommentInput from './CommentInput/CommentInput';

const commentSection = props => {
	const { likes, timestamp, comments, addLike, isLiked } = props;
	return (
		<div>
			<CommentList likes={likes} comments={comments} addLike={addLike} isLiked={isLiked} />
			<CommentTime timestamp={timestamp} />
			<CommentInput {...props} />
		</div>
	);
};
export default commentSection;
