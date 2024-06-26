import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = () => {
	return (
		<ul className="nav-links">
			<li>
				<NavLink to={"/"}>All Users</NavLink>
			</li>
			<li>
				<NavLink to={"/u1/places"}>My Places</NavLink>
			</li>
			<li>
				<NavLink to={"/place/new"}>Add Place</NavLink>
			</li>
			<li>
				<NavLink to={"/login"}>Login</NavLink>
			</li>
		</ul>
	);
};
export default NavLinks;
