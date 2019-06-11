import React from 'react';
import styled from 'styled-components';

const CommentInputForm = styled.form`
	input {
		width: 100%;
		height: 30px;
		margin-top: 10px;
	}
`;

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
		<CommentInputForm onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="Add a comment..."
				onChange={onCommentChange}
				value={props.form.commentValue}
			/>
			<button style={{ display: 'none' }} type="submit" />
		</CommentInputForm>
	);
};
export default CommentInput;
