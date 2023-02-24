import React from "react";
import Recomendation from "../../UI/Recomendation/Recomendation";
import SearchBox from "../../UI/SearchBox/SearchBox";
import "./Navbar.scss";

const Navbar = () => {
	const items = [
		{
            type: "default",
			key: "Home",
            path: "/"
		},
		{
            type: "suggestion",
			key: "Sport",
            path: "/search?q=finance"
		},
		{
            type: "suggestion",
			key: "Finance",
            path: "/search?q=finance"
		},
	];

	return (
		<div className="nav">
			<div className="top">
				<div className="searchBox">
					<SearchBox placeholder="Search a News" />
				</div>
				<div className="location"></div>
			</div>
			<div className="bottom">
				<Recomendation items={items} />
			</div>
		</div>
	);
};

export default Navbar;
