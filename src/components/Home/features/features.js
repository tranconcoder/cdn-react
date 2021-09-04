import React from "react";
import imgs from "../imgs";

export default function Features() {
	return (
		<div className="features">
			<div className="features__header">
				<div className="header__edge"></div>
				<div className="header__block"></div>
			</div>
			<div className="features__body">
				<div
					className="features__body__thumb"
					data-aos="zoom-in-right"
					data-aos-duration="1000"
				>
					<img src={imgs.features.illustrator} alt="" />
				</div>

				<div
					className="features__body__features-ctn"
					data-aos="zoom-in-left"
					data-aos-duration="1000"
				>
					<div className="features-ctn__provide-cdn">
						<i className="fi-br-link"></i>
						<p>CHIA SẺ CDN PACKAGE</p>
						<i className="fi-br-angle-right"></i>
					</div>
					<div className="features-ctn__color-picker">
						<i className="fi-br-fill"></i>
						<p>CÔNG CỤ CHỈNH MÀU SẮC</p>
						<i className="fi-br-angle-right"></i>
					</div>
					<div className="features-ctn__compress-file">
						<i className="fi-br-compress-alt"></i>
						<p>NÉN TỆP TRƯỚC KHI DEPLOY</p>
						<i className="fi-br-angle-right"></i>
					</div>
					<div className="features-ctn__posts">
						<i className="fi-br-comment"></i>
						<p>THẢO LUẬN VỀ LẬP TRÌNH</p>
						<i className="fi-br-angle-right"></i>
					</div>
				</div>
			</div>
		</div>
	);
}
