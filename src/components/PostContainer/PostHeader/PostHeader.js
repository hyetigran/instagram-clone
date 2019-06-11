import React from 'react';
import styled from 'styled-components';

const PostHeaderDiv = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;

	.ThumbnailContainer {
		height: 30px;
		width: auto;
		border-radius: 50%;
		margin: 2%;

		img {
			height: 100%;
			width: auto;
			border-radius: 50%;
		}
	}
`;

const postHeader = props => {
	const { username, thumbnail } = props;
	return (
		<PostHeaderDiv>
			<div className="ThumbnailContainer">
				<img src={thumbnail} alt="thumbnail" />
			</div>
			<div>{username}</div>
		</PostHeaderDiv>
	);
};
export default postHeader;
