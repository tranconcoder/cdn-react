import React, { useState, useEffect } from "react";
import "./Nav.scss";
import axios from "axios";
import icons from "./icons";
import imgs from "./imgs";
import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<div>
			<nav className="nav container-fluid">
				<div className="nav-ctn container-fluid">
					<NavLeft />
					<NavCenter />
					<NavRight />
				</div>
			</nav>
		</div>
	);
}

// Left
function NavLeft(props) {
	return <img src="" alt="" className="nav-ctn__left" />;
}

// Center
function NavCenter(props) {
	return (
		<ul className="nav-ctn__center">
			<li className="nav-ctn__center__home">
				<p>TRANG CHỦ</p>
			</li>
			<li className="nav-ctn__center__cdns">
				<p>TÌM CDN</p>
			</li>
			<li className="nav-ctn__center__upload">
				<p>ĐĂNG CDN</p>
			</li>
			<li className="nav-ctn__center__help">
				<p>TRỢ GIÚP</p>
			</li>
		</ul>
	);
}

// Right
function NavRight(props) {
	return (
		<div className="nav-ctn__right">
			<NavRightNotLoggedIn />
			<NavRightLoggedIn />
		</div>
	);
}

function NavRightLoggedIn() {
	return (
		<ul className="right">
			<NotifyComponent />
			<SeenCdnComponent />
			<ProfileComponent />
		</ul>
	);
}

function NotifyComponent() {
	return (
		<li className="right__notify">
			<div className="right__notify__icon">
				<img src={icons.notify.icon} alt="" />
			</div>
			<div className="right__notify__box">
				<header className="notify-box__header">
					<img
						className="notify-box__header__icon"
						src={icons.notify.header}
						alt=""
					/>
					<p className="notify-box__header__content">Thông báo</p>
				</header>
				<NotifyList />
				<footer className="notify-box__footer">
					<button className="notify-box__footer__clear-all-seen-btn btn">
						<p>Xóa thông báo đã đọc</p>
					</button>
				</footer>
			</div>
		</li>
	);
}
function SeenCdnComponent() {
	return (
		<li className="right__seen-cdn">
			<div className="right__seen-cdn__icon">
				<img src={icons.seenCdn.icon} alt="" />
			</div>
			<div className="right__seen-cdn__box">
				<header className="seen-cdn-box__header">
					<img
						className="seen-cdn-box__header__icon"
						src={icons.seenCdn.header}
						alt=""
					/>
					<p className="seen-cdn-box__header__content">Cdn đã xem</p>
				</header>
				<SeenCdnList />
				<footer className="seen-cdn-box__footer">
					<button className="seen-cdn-box__footer__clear-all-seen-btn">
						<p>Xóa danh sách</p>
					</button>
				</footer>
			</div>
		</li>
	);
}
function ProfileComponent() {
	return (
		<li className="right__profile">
			<div className="profile__avatar">
				<img
					className="profile__avatar__avatar-img"
					src={icons.profile.defaultAvt}
					alt=""
				/>
				<img className="profile__avatar__more-icon" src={icons.profile.more} alt="" />
			</div>
			<div className="profile__box">
				<div className="profile__box__body">
					<div className="avatar-ctn">
						<img
							className="avatar-ctn__avatar"
							src={icons.profile.defaultAvt}
							alt=""
						/>
					</div>
					<div className="info-ctn">
						<div className="info-ctn__name">
							<p>Trần Văn Còn</p>
						</div>
						<div className="info-ctn__gmail">
							<p>tranvanconkg@gmail.com</p>
						</div>
					</div>
					<div className="tools-ctn">
						<a className="tools-ctn__change-profile" href="/">
							<img
								className="tools-ctn__change-profile__img"
								src={icons.profile.icon}
								alt=""
							/>
							<span className="tools-ctn__change-profile__label">
								Thông tin cá nhân
							</span>
						</a>
						<a className="tools-ctn__seen-cdns" href="/">
							<img
								className="tools-ctn__seen-cdns__img"
								src={icons.profile.history}
								alt=""
							/>
							<span className="tools-ctn__seen-cdns__label">Đã xem gần đây</span>
						</a>
						<a className="tools-ctn__favorite-cdns" href="/">
							<img
								className="tools-ctn__favorite-cdns__img"
								src={icons.profile.favorite}
								alt=""
							/>
							<span className="tools-ctn__favorite-cdns__label">
								Đã xem gần đây
							</span>
						</a>
					</div>
					<div className="system-tools-ctn">
						<a className="system-tools-ctn__settings" href="/">
							<img
								className="system-tools-ctn__logout__img"
								src={icons.profile.settings}
								alt=""
							/>
							<span className="system-tools-ctn__logout__label">Cài đặt</span>
						</a>
						<Link to="/" className="system-tools-ctn__logout">
							<img
								className="system-tools-ctn__logout__img"
								src={icons.profile.logout}
								alt=""
							/>
							<span className="system-tools-ctn__logout__label">Đăng xuất</span>
						</Link>
					</div>
				</div>
			</div>
		</li>
	);
}
function NavRightNotLoggedIn() {
	return (
		<button className="right__sign-in-btn btn">
			<p>Đăng nhập</p>
		</button>
	);
}

function NotifyList(props) {
	// const [notifyList, setNotifyList] = useState([]);

	return (
		<ul className="notify-box__notify-list">
			<NotifyEmpty />
			<Notify img={imgs.test} action="see">
				Lorem 1
			</Notify>
			<Notify img={imgs.test} action="seen">
				Lorem 2
			</Notify>
			<Notify img={imgs.test}>Lorem 3</Notify>
			<Notify img={imgs.test}>Lorem 3</Notify>
			<Notify img={imgs.test}>Lorem 3</Notify>
			<Notify img={imgs.test}>Lorem 3</Notify>
			<Notify img={imgs.test}>Lorem 3</Notify>
			<Notify img={imgs.test}>Lorem 3</Notify>
			<Notify img={imgs.test}>Lorem 3</Notify>
		</ul>
	);
}

function NotifyEmpty(props) {
	return (
		<li
			className="notify-box__notify-list__item empty"
			style={{ backgroundImage: `url(${icons.common.empty})` }}
		/>
	);
}

function Notify(props) {
	return (
		<li
			className={
				props.action === "see"
					? "notify-box__notify-list__item see"
					: props.action === "seen"
					? "notify-box__notify-list__item seen"
					: "notify-box__notify-list__item"
			}
		>
			<img
				className="notify-box__notify-list__item__thumb thumb"
				src={props.img}
				alt=""
			/>
			<div className="notify-box__notify-list__item__content content">
				<p>{props.children}</p>
				<i
					className="more-icon"
					style={{ backgroundImage: `url(${icons.common.more})` }}
				/>
			</div>
			<i
				className="notify-box__notify-list__item__remove-btn remove-icon"
				style={{ backgroundImage: `url(${icons.common.close})` }}
			/>
		</li>
	);
}

function SeenCdnList(props) {
	const [seenCdns, setSeenCdns] = useState([]);

	useEffect(() => {
		async function getSeenCdns() {
			const apiUrl = "https://jsonplaceholder.typicode.com/posts";
			const seenCdnsApi = await (await axios.get(apiUrl)).data;
			const jsx = await seenCdnsApi.map((seenCdn, index) => {
				return (
					<SeenCdn key={index} img={imgs.test}>
						{seenCdn.body}
					</SeenCdn>
				);
			});

			setSeenCdns(jsx);
		}
		getSeenCdns();
	}, []);

	return (
		<ul className="seen-cdn-box__seen-cdn-list">
			{seenCdns?.length ? seenCdns : <SeenCdnEmpty />}
		</ul>
	);
}

function SeenCdnEmpty() {
	return (
		<li
			className="notify-box__seen-cdn-list__item empty"
			style={{ backgroundImage: `url(${icons.common.empty})` }}
		/>
	);
}

function SeenCdn(props) {
	return (
		<li
			className={
				props.action === "see"
					? "seen-cdn-box__seen-cdn-list__item see"
					: props.action === "seen"
					? "seen-cdn-box__seen-cdn-list__item seen"
					: "seen-cdn-box__seen-cdn-list__item"
			}
		>
			<img
				className="seen-cdn-box__seen-cdn-list__item__thumb thumb"
				src={props.img}
				alt=""
			/>
			<div className="seen-cdn-box__seen-cdn-list__item__content content">
				<p>{props.children}</p>
			</div>
			<i
				className="seen-cdn-box__seen-cdn-list__item__remove-btn remove-icon"
				style={{ backgroundImage: `url(${icons.common.close})` }}
			/>
		</li>
	);
}
