import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
	render() {
		return (
			<nav>
				<ul>
					<li>
						<Link to="/home">Home</Link>
					</li>
					<li>
						<Link to="/general">General</Link>
					</li>
					<li>
						<Link to="/business">Business</Link>
					</li>
					<li>
						<Link to="/health">Health</Link>
					</li>
					<li>
						<Link to="/science">Science</Link>
					</li>
					<li>
						<Link to="/sports">Sports</Link>
					</li>
					<li>
						<Link to="/technology">Technology</Link>
					</li>
				</ul>
			</nav>
		);
	}
}
