import { ComponentProps } from "react";
import "./Input.css";

interface Props extends ComponentProps<"input"> {
	className?: string;
	label: string;
	el: string;
	rows?: number;
}
const Input = ({ label, id, el, type, placeholder, rows }: Props) => {
	const element =
		el === "input" ? (
			<input type={type} id={id} placeholder={placeholder} />
		) : (
			<textarea rows={rows || 3} id={id} />
		);
	return (
		<div className={`form-control`}>
			<label htmlFor={id}>{label}</label>
			{element}
		</div>
	);
};
export default Input;
