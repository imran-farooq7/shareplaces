import PlaceList from "../../places/components/PlaceList";
const DUMMY_PLACE_LIST = [
	{
		id: "p1",
		title: "Empire state building",
		description: "one of the state building in US",
		image:
			"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/500px-Empire_State_Building_%28aerial_view%29.jpg",
		address: "20 W 34th St., New York, NY 10001",
		coordinates: {
			lat: 40.7484,
			lng: -73.985428,
		},
		creator: "u1",
	},
];
const UserPlaces = () => {
	return <PlaceList items={DUMMY_PLACE_LIST} />;
};
export default UserPlaces;
