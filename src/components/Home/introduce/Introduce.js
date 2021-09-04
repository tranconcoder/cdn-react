import React, { useState, useRef } from "react";
import imgs from "../imgs";

export default function Introduce() {
	const introduceElm = useRef(null);
	const [windowHeight] = useState(window.innerHeight);
	const [screenHeight] = useState(window.screen.availHeight);

	return (
		<div
			ref={introduceElm}
			style={{ height: windowHeight, maxHeight: screenHeight }}
			className="introduce"
		>
			<div
				className="illustrator-box"
				data-aos="zoom-in-right"
				data-aos-duration="1000"
			>
				<img src={imgs.introduce.illustrator} alt="" />
			</div>

			<div className="content-box" data-aos="zoom-in-left" data-aos-duration="1000">
				<h3>Cdn Link!</h3>
				<p>Chuyên cung cấp công cụ hỗ trợ lập trình viên Front-end.</p>
				<button>
					<p>TRUY CẬP</p>
				</button>
			</div>

			<div className="style-box-1">
				<div className="style-box-1-1"></div>
			</div>
		</div>
	);
}
