import React from "react";
import Navbar from "./navbar";

const ArticleItem = (props) => {
	const { article } = props;
	return (
		<div>
			<img src={article.urlToImage} height="200" alt="" />
			<h3>{article.title}</h3>
			<p>{article.author}</p>
		</div>
	);
};

const SideItems = (props) => {
	const { article } = props;
	return (
		<article className="side-articles">
			<span>
				{article.publishedAt
					.slice(11, 16)
					.split(":")
					.join(":")
					.replace("Z", "")}
			</span>
			<p>{article.title}</p>
		</article>
	);
};

const ArticleList = (props) => {
	return (
		<div className="news-container">
			<Navbar />
			<div>
				<h3>News</h3>
				{props.articles.map((article) => {
					return (
						<>
							<ArticleItem article={article}>{article.title}</ArticleItem>
						</>
					);
				})}
			</div>

			<div>
				<h1>Latest news</h1>
				{props.articles.map((article) => {
					return (
						<>
							<SideItems article={article}>{article.title}</SideItems>
						</>
					);
				})}
			</div>
		</div>
	);
};
export default ArticleList;
