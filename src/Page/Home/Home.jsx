import React, { useState } from "react";
import TopHeadline from "../../Components/Cards/TopHeadline/TopHeadline";
import "./Home.scss";
import moment from "moment/moment";

const Home = () => {
    const day = moment().format("dddd")
    const month = moment().format("MMM")
    const date = moment().format("DD")

    const [topHeadlines, setTopHeadlines] = useState()

	return (
		<div className="Home">
			<div className="title">
				<span>News For You</span>
                <span>{day + ", " + month + " " +date}</span>
			</div>
			<TopHeadline />
		</div>
	);
};

export default Home;
