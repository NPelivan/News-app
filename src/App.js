import React from "react";
import Home from "./pages/home";
import General from "./pages/general";
import Business from "./pages/business";
import Health from "./pages/health";
import Science from "./pages/science";
import Sports from "./pages/sports";
import Tech from "./pages/tech";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/style.scss";

class App extends React.Component {
	render() {
		return (
			<div>
				<Router>
					<Route exact path="/" component={Home} />
					<Route exact path="/general" component={General} />
					<Route exact path="/business" component={Business} />
					<Route exact path="/health" component={Health} />
					<Route exact path="/science" component={Science} />
					<Route exact path="/sports" component={Sports} />
					<Route exact path="/technology" component={Tech} />
				</Router>
			</div>
		);
	}
}

export default App;
