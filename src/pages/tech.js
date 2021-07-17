import React, { Component } from "react";
import { techArticles, searchArticles } from "../components/api";
import ArticleList from "../components/articlesList";
import SearchBar from "../components/searchBar";

import Topbar from "../components/topbar";

export default class Tech extends Component {
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
			const response = await techArticles();

			this.setState({ articles: response.articles });
		} catch (error) {
			this.setState({ apiError: "Could not find any articles" });
		}
	}
	render() {
		const { articles, apiError, loading } = this.state;
		return (
			<main>
				<Topbar />
				<section className="main_container">
					<div className="header_component">
						<h1>
							<span>My</span>News
						</h1>
						<SearchBar searchForTopic={this.searchForTopic} />
					</div>

					<hr />

					{loading && <p>Searching for articles...</p>}
					{articles.length > 0 && <ArticleList articles={articles} />}
					{apiError && <p>Could not find any articles. Please try again.</p>}
				</section>
			</main>
		);
	}
}
