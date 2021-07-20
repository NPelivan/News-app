import React, { Component } from "react";
import { Link } from "react-router-dom";
import Homeicon from "../assets/Home.svg";
import Generalicon from "../assets/News.svg";
import Businessicon from "../assets/Business.svg";
import Healthicon from "../assets/Health.svg";
import Scienceicon from "../assets/Science.svg";
import Sportsicon from "../assets/Sports.svg";
import Techicon from "../assets/TV-Guide.svg";

export default class Navbar extends Component {
	render() {
		return (
			<nav>
				<ul>
					<li>
						<Link to="/">
							<img src={Homeicon} alt="" /> <span>Home</span>
						</Link>
					</li>
					<li>
						<Link to="/general">
							<img src={Generalicon} alt="" /> <span>General</span>
						</Link>
					</li>
					<li>
						<Link to="/business">
							<img src={Businessicon} alt="" /> <span>Business</span>
						</Link>
					</li>
					<li>
						<Link to="/health">
							<img src={Healthicon} alt="" /> <span>Health</span>
						</Link>
					</li>
					<li>
						<Link to="/science">
							<img src={Scienceicon} alt="" /> <span>Science</span>
						</Link>
					</li>
					<li>
						<Link to="/sports">
							<img src={Sportsicon} alt="" /> <span>Sports</span>
						</Link>
					</li>
					<li>
						<Link to="/technology">
							<img src={Techicon} alt="" /> <span>Technology</span>
						</Link>
					</li>
				</ul>
			</nav>
		);
	}
}
