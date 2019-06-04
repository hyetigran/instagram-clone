import React from 'react';
import '../PostContainer.css';

const postImage = props => {
	const { postImage } = props;
	return (
		<div className="ImageContainer">
			<img src={postImage} alt="Post" />
		</div>
	);
};
export default postImage;
