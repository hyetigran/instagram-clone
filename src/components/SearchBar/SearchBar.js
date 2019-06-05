import React from 'react';
import './SearchBar.css';
import logo from '../../assets/images/Instagram-text.png';

const searchBar = props => {
	return (
		<div className="SearchBarContainer">
			<div className="LogoWrapper">
				<i className="fab fa-instagram" />
				<img src={logo} alt="Instagram" />
			</div>
			<div className="SearchForm">
				<form>
					<input type="text" placeholder="Search" value={props.search} onChange={props.inputSearch} />
				</form>
			</div>
			<div className="NavigationWrapper">
				<i class="far fa-compass" />
				<i className="far fa-comment" />
				<i class="far fa-user" />
			</div>
		</div>
	);
};

export default searchBar;
