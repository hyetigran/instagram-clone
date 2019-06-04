import React from 'react';
import '../CommentSection.css';

const commentInput = props => {
	return (
		<div className="CommentInput">
			<input type="text" placeholder="Add a comment..." />
		</div>
	);
};
export default commentInput;
