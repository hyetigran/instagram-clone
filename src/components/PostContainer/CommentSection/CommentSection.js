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
			<div>Some JSX Time</div>
			<div>Some JSX Input</div>
		</div>
	);
};
export default commentSection;
