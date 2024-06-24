import { useLoaderData } from "react-router-dom";
import Input from "../../shared/Form Elements/Input";
import {
	VALIDATOR_MINLENGTH,
	VALIDATOR_REQUIRE,
} from "../../shared/utils/validators";

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
export async function loader(params: any) {
	const updatePlace = DUMMY_PLACE_LIST.find((p) => {
		return p.id === params.params.pid;
	});
	return {
		updatePlace,
	};
}
const UpdatePlace = () => {
	const updatePlace = useLoaderData() as {
		id: string;
		title: string;
		description: string;
		image: string;
		address: string;
		coordinates: {
			lat: number;
			lng: number;
		};
		creator: string;
	};
	if (!updatePlace) {
		return (
			<div className="center">
				<p>Could not found place</p>
			</div>
		);
	}
	return (
		<form>
			<Input
				type="text"
				el="input"
				id="title"
				label="title"
				validators={[VALIDATOR_REQUIRE()]}
				errorText="Please enter a valid title"
				getInput={() => {}}
				value={updatePlace.title}
			/>
			<Input
				el="textarea"
				id="description"
				label="Description"
				validators={[VALIDATOR_MINLENGTH("5")]}
				errorText="Please enter a valid description"
				value={updatePlace.description}
				getInput={() => {}}
			/>
		</form>
	);
};
export default UpdatePlace;
