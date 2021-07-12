import React, { Component } from "react";
import Topbarimg from "../assets/topbar.png";

export default class Topbar extends Component {
	render() {
		return (
			<div className="topbar">
				<img src={Topbarimg} alt="" />
				<p>Make MyNews your homepage</p>
				<p>Every day discover what's trending on the internet!</p>
				<button>Get</button>
				<button>No, thanks</button>
			</div>
		);
	}
}
