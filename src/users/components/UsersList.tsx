import Card from "../../shared/UI Elements/Card";
import UserItem from "./UserItem";
import "./UsersList.css";

interface Props {
	items: {
		id: string;
		name: string;
		image: string;
		places: number;
	}[];
}
const UsersList = ({ items }: Props) => {
	if (items.length === 0) {
		return (
			<div className="center">
				<Card>
					<h1>No user found</h1>
				</Card>
			</div>
		);
	}
	return (
		<ul className="users-list">
			{items.map((item) => (
				<UserItem
					key={item.id}
					id={item.id}
					image={item.image}
					name={item.name}
					placesCount={item.places}
				/>
			))}
		</ul>
	);
};
export default UsersList;
