import empty from "../../../assets/icons/nav/empty.svg";
import close from "../../../assets/icons/global/close-icon-1.svg";
import more from "../../../assets/icons/global/arrow-down-thin.svg";

import notifyIcon from "../../../assets/icons/nav/notify.svg";
import headerNotifyIcon from "../../../assets/icons/nav/notify-header.svg";

import seenCdnIcon from "../../../assets/icons/nav/seen-cdn.svg";
import headerSeenCdnIcon from "../../../assets/icons/nav/seen-cdn-header.svg";

import defaultAvt from "../../../assets/icons/nav/default-avt.svg";
import moreIconProfile from "../../../assets/icons/nav/more-icon.svg";
import profileIcon from "../../../assets/icons/nav/profile.svg";
import historyIcon from "../../../assets/icons/nav/clock.svg";
import favoriteIcon from "../../../assets/icons/nav/favorite.svg";
import logoutIcon from "../../../assets/icons/nav/logout.svg";
import settingsIcon from "../../../assets/icons/nav/settings.svg";

const icons = {
	common: {
		empty: empty,
		close: close,
		more: more,
	},

	notify: {
		icon: notifyIcon,
		header: headerNotifyIcon,
	},

	seenCdn: {
		icon: seenCdnIcon,
		header: headerSeenCdnIcon,
	},

	profile: {
		icon: profileIcon,
		defaultAvt: defaultAvt,
		more: moreIconProfile,
		history: historyIcon,
		favorite: favoriteIcon,
		logout: logoutIcon,
		settings: settingsIcon,
	},
};

export default icons;
