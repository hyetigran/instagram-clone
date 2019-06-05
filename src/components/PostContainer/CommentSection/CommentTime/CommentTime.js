import React from 'react';
import '../CommentSection.css';

const commentTime = props => {
	const { timestamp } = props;
	return <div>{timestamp}</div>;
};
export default commentTime;
