import React from 'react';
import styled from 'styled-components';

const PostImageDiv = styled.div`
	width: 100%;
	img {
		display: block;
		width: 100%;
		height: auto;
	}
`;
const postImage = props => {
	const { postImage } = props;
	return (
		<PostImageDiv>
			<img src={postImage} alt="Post" />
		</PostImageDiv>
	);
};
export default postImage;
