import Button from "../../shared/Form Elements/Button";
import Card from "../../shared/UI Elements/Card";
import "./PlaceItem.css";
interface Props {
	id: string;
	image: string;
	title: string;
	description: string;
	address: string;
	creatorId: string;
}
const PlaceItem = ({
	address,
	creatorId,
	description,
	id,
	image,
	title,
}: Props) => {
	return (
		<li className="place-item" id={creatorId}>
			<Card className="place-item__content">
				<div className="place-item__image">
					<img src={image} alt={title} />
				</div>
				<div className="place-item__info">
					<h2>{title}</h2>
					<h3>{address}</h3>
					<p>{description}</p>
				</div>
				<div className="place-item__actions">
					<Button inverse>View On Map</Button>
					<Button to={`/places/${id}`}>Edit</Button>
					<Button danger>Delete</Button>
				</div>
			</Card>
		</li>
	);
};
export default PlaceItem;
