import React from 'react';
import './CommentSection.css';
import CommentList from './CommentList/CommentList';
import CommentTime from './CommentTime/CommentTime';
import CommentInput from './CommentInput/CommentInput';

const commentSection = props => {
	return (
		<div>
			<CommentList {...props} />
			<CommentTime timestamp={props.timestamp} />
			<CommentInput {...props} />
		</div>
	);
};
export default commentSection;
