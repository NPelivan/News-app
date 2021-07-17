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
						<img src={Homeicon} alt="" />
						<Link to="/">Home</Link>
					</li>
					<li>
						<img src={Generalicon} alt="" />
						<Link to="/general">General</Link>
					</li>
					<li>
						<img src={Businessicon} alt="" />
						<Link to="/business">Business</Link>
					</li>
					<li>
						<img src={Healthicon} alt="" />
						<Link to="/health">Health</Link>
					</li>
					<li>
						<img src={Scienceicon} alt="" />
						<Link to="/science">Science</Link>
					</li>
					<li>
						<img src={Sportsicon} alt="" />
						<Link to="/sports">Sports</Link>
					</li>
					<li>
						<img src={Techicon} alt="" />
						<Link to="/technology">Technology</Link>
					</li>
				</ul>
			</nav>
		);
	}
}
