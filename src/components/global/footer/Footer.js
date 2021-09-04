import React, { useEffect, useRef } from "react";
import icons from "./icons";
import "./footer.scss";

export default function Footer() {
	return (
		<div className="footer">
			<FooterLeft />
			<FooterRight />
		</div>
	);
}

function FooterLeft(props) {
	const listItemsWebInfo = [
		{ label: "Tại sao có website", link: "#" },
		{ label: "Mục đích của website", link: "#" },
		{ label: "Người lập trình", link: "#" },
	];
	const listItemsFeaturesInfo = [
		{ label: "Sử dụng CDN", link: "#" },
		{ label: "Công cụ Pick Color", link: "#" },
		{ label: "Nén tập tin trước khi Deploy", link: "#" },
		{ label: "Blog về lập trình", link: "#" },
	];
	const listItemsSupport = [
		{ label: "Đến trang tư vấn", link: "#" },
		{ label: "Liên hệ quản trị viên", link: "#" },
	];

	return (
		<div className="footer__left-slider row row-cols-3 gx-5 m-0">
			<div className="web-info-ctn col">
				<div className="web-info">
					<SlideHeader>THÔNG TIN TRANG</SlideHeader>
					<SlideBody listItems={listItemsWebInfo} />
				</div>
			</div>

			<div className="features-info-ctn col">
				<div className="features-info">
					<SlideHeader>TÍNH NĂNG TRANG</SlideHeader>
					<SlideBody listItems={listItemsFeaturesInfo} />
				</div>
			</div>

			<div className="support-info-ctn col">
				<div className="support-info">
					<SlideHeader>HỖ TRỢ NGƯỜI DÙNG</SlideHeader>
					<SlideBody listItems={listItemsSupport} />
				</div>
			</div>
		</div>
	);
}

function FooterRight(props) {
	const footerRightCopyBtn = useRef(null);
	const footerGmail = useRef(null);

	useEffect(() => {
		const footerCopyBtnElm = footerRightCopyBtn.current;
		const footerGmailElm = footerGmail.current;

		function handleClickCopyBtn(e) {
			e.target.className = "fi-sr-copy";
			setTimeout(() => {
				e.target.className = "fi-rr-copy";
			}, 2000);

			navigator.clipboard.writeText(footerGmailElm.textContent);
		}
		footerCopyBtnElm.addEventListener("click", handleClickCopyBtn);

		return function Clear() {
			footerCopyBtnElm.removeEventListener("click", handleClickCopyBtn);
		};
	}, []);

	return (
		<div className="footer__right-slider">
			<a
				className="footer__right-slider__fb-ctn"
				href="https://www.facebook.com/tranvanconkg0/"
				target="_blank"
				rel="noreferrer noopener"
			>
				<img src={icons.facebook} alt="" />
				<div className="fb-ctn__info">
					<h4 className="fb-ctn__info__name">Facebook</h4>
					<p className="fb-ctn__info__link">
						https://www.facebook.com/tranvanconkg0/
					</p>
				</div>
			</a>

			<div className="footer__right-slider__gmail-ctn">
				<img src={icons.email} alt="" />
				<div className="gmail-ctn__info">
					<h4 className="gmail-ctn__info__name">Gmail</h4>
					<div className="gmail-ctn__info__gmail-address">
						<p ref={footerGmail}>tranvanconkg@gmail.com</p>
						<i className="fi-rr-copy" ref={footerRightCopyBtn}></i>
					</div>
				</div>
			</div>
		</div>
	);
}

function SlideHeader(props) {
	return (
		<header>
			<p>{props.children}</p>
		</header>
	);
}

function SlideBody(props) {
	return (
		<div>
			<ul>
				{props.listItems.map((item, index) => {
					return <SlideBodyItem key={index} link={item.link} label={item.label} />;
				})}
			</ul>
		</div>
	);
}

function SlideBodyItem(props) {
	return (
		<li>
			<a target="_blank" rel="noreferrer noopener" href={props.link}>
				{props.label}
			</a>
		</li>
	);
}
