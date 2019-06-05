import React from 'react';
import '../CommentSection.css';

const CommentInput = props => {
	const onCommentChange = event => {
		props.inputChange(event.target.value, 'commentValue');
	};

	const onCommentAdd = event => {
		const { postId, addComment } = props;
		addComment(postId);
	};

	const onSubmit = event => {
		event.preventDefault();
		onCommentAdd();
	};

	return (
		<form className="CommentInput" onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="Add a comment..."
				onChange={onCommentChange}
				value={props.form.commentValue}
			/>
			<button style={{ display: 'none' }} type="submit" />
		</form>
	);
};
export default CommentInput;
