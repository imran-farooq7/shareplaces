import "./Card.css";
interface Props {
	className?: string;
	style?: React.CSSProperties;
	children: React.ReactNode;
}

const Card = ({ children, className, style }: Props) => {
	return (
		<div className={`card ${className}`} style={style}>
			{children}
		</div>
	);
};

export default Card;
