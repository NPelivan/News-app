import React, { Component } from "react";
import { generalArticles, searchArticles } from "../components/api";

import SearchBar from "../components/searchBar";
import ArticleList from "../components/articlesList";
import Topbar from "../components/topbar";
import MobileNav from "../components/mobileNav";

export default class General extends Component {
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
			const response = await generalArticles();

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
						<div className="header">
							<h1>
								<span>My</span>News
							</h1>
							<MobileNav />
						</div>
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
