import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./style/App.scss";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
				</Switch>
			</Router>
		</Provider>
	);
}
