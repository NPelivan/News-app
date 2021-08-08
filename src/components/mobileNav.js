import React, { Component } from "react";
import Hamburger from "../assets/icon-hamburger.svg";
import Close from "../assets/icon-close.svg";
import { Link } from "react-router-dom";

import Homeicon from "../assets/Home.svg";
import Generalicon from "../assets/News.svg";
import Businessicon from "../assets/Business.svg";
import Healthicon from "../assets/Health.svg";
import Scienceicon from "../assets/Science.svg";
import Sportsicon from "../assets/Sports.svg";
import Techicon from "../assets/TV-Guide.svg";
import SearchBar from "./searchBar";

export default class MobileNav extends Component {
	state = {
		on: false,
	};

	clickNav = () => {
		this.setState({
			on: !this.state.on,
		});
	};
	render() {
		return (
			<div className="mobile-nav">
				<img src={Hamburger} alt="" onClick={this.clickNav} />

				{this.state.on && (
					<div className="mobile-nav-trigger">
						<div className="close-button">
							<img src={Close} alt="" onClick={this.clickNav} />
						</div>

						<h1>
							<span>My</span>News
						</h1>

						<SearchBar searchForTopic={this.searchForTopic} />

						<nav className="mobile-nav-bar">
							<ul>
								<li>
									<Link to="/">
										<img src={Homeicon} alt="" />
										<span>Home</span>
									</Link>
								</li>

								<li>
									<Link to="/general">
										<img src={Generalicon} alt="" />
										<span>General</span>
									</Link>
								</li>

								<li>
									<Link to="/business">
										<img src={Businessicon} alt="" />
										<span>Business</span>
									</Link>
								</li>

								<li>
									<Link to="/health">
										<img src={Healthicon} alt="" />
										<span>Health</span>
									</Link>
								</li>

								<li>
									<Link to="/science">
										<img src={Scienceicon} alt="" />
										<span>Science</span>
									</Link>
								</li>

								<li>
									<Link to="/sports">
										<img src={Sportsicon} alt="" />
										<span>Sports</span>
									</Link>
								</li>

								<li>
									<Link to="/tech">
										<img src={Techicon} alt="" />
										<span>Technology</span>
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				)}
			</div>
		);
	}
}
