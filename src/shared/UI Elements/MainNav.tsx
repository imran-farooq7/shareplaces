import { useState } from "react";
import { Link } from "react-router-dom";
import Backdrop from "./Backdrop";
import MainHeader from "./MainHeader";
import "./MainNav.css";
import NavLinks from "./NavLinks";
import SideBar from "./SideBar";
const MainNav = () => {
	const [showSidebar, setShowSidebar] = useState(false);
	return (
		<>
			{showSidebar && <Backdrop onClick={() => setShowSidebar(false)} />}

			<SideBar showSidebar={showSidebar} onClick={() => setShowSidebar(false)}>
				<nav className="main-navigation__drawer-nav">
					{" "}
					<NavLinks />
				</nav>
			</SideBar>

			<MainHeader>
				<button
					className="main-navigation__menu-btn"
					onClick={() => setShowSidebar((prevState) => !prevState)}
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
				<Link to={"/"} className="main-navigation__title">
					<h1>YourPlaces</h1>
				</Link>

				<nav className="main-navigation__header-nav">
					<NavLinks />
				</nav>
			</MainHeader>
		</>
	);
};
export default MainNav;
