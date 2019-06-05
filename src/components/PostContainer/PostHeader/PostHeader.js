import React from 'react';
import '../PostContainer.css';

const postHeader = props => {
	const { username, thumbnail } = props;
	return (
		<div className="PostHeader">
			<div className="ThumbnailContainer">
				<img src={thumbnail} alt="thumbnail" />
			</div>
			<div>{username}</div>
		</div>
	);
};
export default postHeader;
