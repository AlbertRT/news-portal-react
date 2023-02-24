import React from "react";
import "./TopHeadline.scss";
import { CalculateDate } from "../../../Service/Lib/Lib";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css"

const TopHeadline = (item) => {
	const items = [
		{
			title: "Alec Baldwin enters not guilty plea over Halyna Hutchins death",
			source: "BBC News",
			published: "2023-02-24T09:07:19.239308Z",
			img: "https://ichef.bbci.co.uk/news/1024/branded_news/26CD/production/_128733990_gettyimages-1447265521.jpg",
		},
		{
			title: "Ukraine war: Vuhledar, the mining town Russia wants to take",
			source: "BBC News",
			published: "2023-02-24T06:07:17.6450883Z",
			img: "https://ichef.bbci.co.uk/news/1024/branded_news/5FA2/production/_128728442_soldiercarryingmortarshell.jpg",
		},
	];
	return (
		<div className="TopHeadline">
			<Slider infinite={true} >
				{items.map((item, index) => (
					<div key={index}>
						<div
							className="news"
							style={{ backgroundImage: `url(${item.img})` }}
						>
							<div className="news-meta">
								<div className="title">
									<a href="">{item.title}</a>
								</div>
								<div className="extra-meta">
									<div className="source">{item.source}</div>
									<div className="dot"></div>
									<div className="published">
										{CalculateDate(item.published)}
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default TopHeadline;
