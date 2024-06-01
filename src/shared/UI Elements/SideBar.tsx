import { MouseEventHandler } from "react";
import "./Sidebar.css";
import { CSSTransition } from "react-transition-group";
const SideBar = ({
	children,
	showSidebar,
	onClick,
}: {
	children: React.ReactNode;
	showSidebar: boolean;
	onClick: MouseEventHandler<HTMLDivElement>;
}) => {
	return (
		<CSSTransition
			in={showSidebar}
			timeout={200}
			classNames={"slide-in-left"}
			mountOnEnter
			unmountOnExit
		>
			<aside className="side-drawer" onClick={onClick}>
				{children}
			</aside>
		</CSSTransition>
	);
};
export default SideBar;
