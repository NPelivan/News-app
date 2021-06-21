import React from "react";

/*const ArticleItem = (props) => {
	const { article } = props;
	return <li>{article.title}</li>;
};
*/
const ArticleList = (props) => {
	return (
		<div>
			{props.articles.map((article) => {
				return <p key={article.title}>{article.title}</p>;
			})}
		</div>
	);
};
export default ArticleList;
