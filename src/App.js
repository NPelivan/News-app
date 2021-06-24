import React from "react";
import Home from "./pages/home";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
	render() {
		return (
			<div>
				<Router>
					<Route exact path="/" component={Home} />
				</Router>
			</div>
		);
	}
}

export default App;
