import React from "react";
import Introduce from "./introduce/Introduce";
import Features from "./features/features";
import "./home.scss";
import Cdn from "./cdnList/Cdn";

export default function Home() {
	return (
		<div id="home">
			<Introduce />
			<Features />
			<Cdn />
		</div>
	);
}
