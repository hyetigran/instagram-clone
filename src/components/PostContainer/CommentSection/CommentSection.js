import React from 'react';
import './CommentSection.css';
import CommentList from './CommentList/CommentList';
import CommentTime from './CommentTime/CommentTime';
import CommentInput from './CommentInput/CommentInput';

const commentSection = props => {
	const { likes, timestamp, comments } = props;
	return (
		<div>
			<CommentList likes={likes} comments={comments} />
			<CommentTime timestamp={timestamp} />
			<CommentInput />
		</div>
	);
};
export default commentSection;
