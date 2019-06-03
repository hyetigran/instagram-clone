import React from 'react';
import '../PostContainer.css';

const postHeader = props => {
	const { username, thumbnail } = props;
	console.log(thumbnail);
	return (
		<div className="PostHeader">
			<div className="ImageContainer">
				<img src={thumbnail} alt="thumbnail" />
			</div>
			<div>{username}</div>
		</div>
	);
};
export default postHeader;
