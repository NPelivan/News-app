import React, { Component } from "react";

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { searchTopic: "" };
	}

	handleChange = (event) => {
		this.setState({ searchTopic: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.searchForTopic(this.state.searchTopic);
	};

	render() {
		return (
			<div className="search-container">
				<form onSubmit={this.handleSubmit}>
					<input
						placeholder="Search news"
						name="topic"
						value={this.state.searchTopic}
						onChange={this.handleChange}
					/>
					<button>SEARCH</button>
				</form>
			</div>
		);
	}
}
