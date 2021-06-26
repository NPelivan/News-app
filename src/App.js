import React from "react";
import Home from "./pages/home";
import General from "./pages/general";
import Business from "./pages/business";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
	render() {
		return (
			<div>
				<Router>
					<Route exact path="/" component={Home} />
					<Route exact path="/general" component={General} />
					<Route exact path="/business" component={General} />
				</Router>
			</div>
		);
	}
}

export default App;
