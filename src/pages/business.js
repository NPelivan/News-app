import React, { Component } from "react";
import { businessArticles, searchArticles } from "../components/api";
import Navbar from "../components/navbar";
import SearchBar from "../components/searchBar";
import ArticleList from "../components/articlesList";

export default class Business extends Component {
	state = {
		articles: [],
		apiError: "",
		loading: false,
	};

	searchForTopic = async (topic) => {
		try {
			this.setState({ loading: true });
			const response = await searchArticles(topic);
			this.setState({
				articles: response.articles,
			});
		} catch (error) {
			this.setState({ apiError: "Could not find any articles" });
		}

		this.setState({ loading: false });
	};

	async componentDidMount() {
		try {
			const response = await businessArticles();

			this.setState({ articles: response.articles });
		} catch (error) {
			this.setState({ apiError: "Could not find any articles" });
		}
	}
	render() {
		const { articles, apiError, loading } = this.state;
		return (
			<main>
				<h1>MyNews</h1>
				<SearchBar searchForTopic={this.searchForTopic} />
				<Navbar />
				{loading && <p>Searching for articles...</p>}
				{articles.length > 0 && <ArticleList articles={articles} />}
				{apiError && <p>Could not find any articles. Please try again.</p>}
			</main>
		);
	}
}
