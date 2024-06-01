import { Link } from "react-router-dom";
import Avatar from "../../shared/UI Elements/Avatar";
import "./UserItem.css";
import Card from "../../shared/UI Elements/Card";
interface Props {
	image: string;
	id: string;
	name: string;
	placesCount: number;
}
const UserItem = ({ id, image, name, placesCount }: Props) => {
	return (
		<li className="user-item">
			<Card className="user-item__content">
				<Link to={`/${id}/places`}>
					<div className="user-item__image">
						<Avatar image={image} alt={name} />
					</div>
					<div className="user-item__info">
						<h2>{name}</h2>
						<h3>
							{placesCount} {placesCount === 1 ? "Place" : "Places"}
						</h3>
					</div>
				</Link>
			</Card>
		</li>
	);
};
export default UserItem;
