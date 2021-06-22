import React, { Component } from "react";
import { breakingNews, getArticles } from "../components/api";
import ArticleList from "../components/articlesList";

export default class Home extends Component {
	state = {
		articles: [],
		apiError: "",
	};

	async componentDidMount() {
		try {
			const response = await getArticles();
			this.setState({ articles: response });
		} catch (error) {
			this.setState({ apiError: "Could not find any articles" });
		}
	}

	render() {
		const { articles, apiError } = this.state;
		return (
			<main>
				<h1>MyNews</h1>
				{articles.length > 0 && <ArticleList articles={articles} />}
				{apiError && <p>Could not find any articles. Please try again.</p>}
			</main>
		);
	}
}
