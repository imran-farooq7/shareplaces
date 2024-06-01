import { MouseEventHandler } from "react";
import "./Backdrop.css";
const Backdrop = ({
	onClick,
}: {
	onClick: MouseEventHandler<HTMLDivElement>;
}) => {
	return <div className="backdrop" onClick={onClick}></div>;
};
export default Backdrop;
