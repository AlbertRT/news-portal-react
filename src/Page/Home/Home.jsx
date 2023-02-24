import React, { useEffect, useState } from "react";
import TopHeadline from "../../Components/Cards/TopHeadline/TopHeadline";
import "./Home.scss";
import moment from "moment/moment";
import {getTopHeadlines} from '../../Service/API/NewsApi'

const Home = () => {
    const day = moment().format("dddd")
    const month = moment().format("MMM")
    const date = moment().format("DD")

    const [TopHeadlines, setTopHeadlines] = useState([])

    // useEffect(() => {
    //     const TopHeadlines = async () => {
    //         const data = await getTopHeadlines('id')
    //         setTopHeadlines([...data.articles]);
    //     }
    //     TopHeadlines()
    // }, [])

	return (
		<div className="Home">
			<TopHeadline item={TopHeadlines} />
		</div>
	);
};

export default Home;
