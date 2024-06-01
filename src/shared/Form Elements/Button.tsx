import { Link } from "react-router-dom";

import "./Button.css";

interface Props {
	href?: string;
	to?: string;
	size?: string;
	inverse?: boolean;
	danger?: boolean;
	children: React.ReactNode;
	onClick?: () => void;
	type?: "submit" | "reset" | "button";
	disabled?: boolean;
}

const Button = ({
	href,
	inverse,
	danger,
	size,
	to,
	children,
	onClick,
	type,
	disabled,
}: Props) => {
	if (href) {
		return (
			<a
				className={`button button--${size || "default"} ${
					inverse && "button--inverse"
				} ${danger && "button--danger"}`}
				href={href}
			>
				{children}
			</a>
		);
	}
	if (to) {
		return (
			<Link
				to={to}
				className={`button button--${size || "default"} ${
					inverse && "button--inverse"
				} ${danger && "button--danger"}`}
			>
				{children}
			</Link>
		);
	}
	return (
		<button
			className={`button button--${size || "default"} ${
				inverse && "button--inverse"
			} ${danger && "button--danger"}`}
			type={type}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;
