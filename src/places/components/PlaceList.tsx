import Card from "../../shared/UI Elements/Card";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css";
interface Props {
	items: {
		id: string;
		image: string;
		title: string;
		description: string;
		address: string;
		creator: string;
		coordinates: {
			lat: number;
			lng: number;
		};
	}[];
}
const PlaceList = ({ items }: Props) => {
	if (items.length === 0) {
		return (
			<div className="place-list center">
				<Card>
					<h1>No places found</h1>
				</Card>
			</div>
		);
	}
	return (
		<ul className="place-list">
			{items.map((item) => (
				<PlaceItem
					key={item.id}
					id={item.id}
					image={item.image}
					title={item.title}
					address={item.address}
					description={item.description}
					creatorId={item.creator}
				/>
			))}
		</ul>
	);
};
export default PlaceList;
