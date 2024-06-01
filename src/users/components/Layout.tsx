import { Outlet } from "react-router-dom";
import MainNav from "../../shared/UI Elements/MainNav";

const Layout = () => {
	return (
		<>
			<MainNav />
			<main>
				<Outlet />
			</main>
		</>
	);
};
export default Layout;
