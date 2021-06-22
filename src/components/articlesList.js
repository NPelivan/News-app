import React from "react";

const ArticleItem = (props) => {
	const { article } = props;
	return (
		<div>
			<img src={article.urlToImage} height="200" />
			<h3>{article.title}</h3>
			<p>{article.author}</p>
		</div>
	);
};

const SideItems = (props) => {
	const { article } = props;
	return (
		<article className="side-articles">
			<span>{article.publishedAt}</span>
			<p>{article.title}</p>
		</article>
	);
};

const ArticleList = (props) => {
	return (
		<>
			<div>
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
		</>
	);
};
export default ArticleList;
