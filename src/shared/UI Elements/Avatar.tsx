import "./Avatar.css";
interface Props {
	className?: string;
	style?: React.CSSProperties;
	image: string;
	alt: string;
	width?: string;
	height?: string;
}
const Avatar = ({ style, alt, className, image, height, width }: Props) => {
	return (
		<div className={`avatar ${className}`} style={style}>
			<img src={image} alt={alt} style={{ width, height }} />
		</div>
	);
};
export default Avatar;
