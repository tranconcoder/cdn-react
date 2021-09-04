import React from "react";

export default function Cdn() {
	return (
		<div className="cdn">
			<CdnListHeader />
		</div>
	);
}

function CdnListHeader(props) {
	return (
		<div className="cdn__header">
			<div className="cdn__header__edge-box"></div>
		</div>
	);
}

function CdnList(props) {
	return <div className="cdn__list">1</div>;
}
