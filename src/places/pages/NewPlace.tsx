import Input from "../../shared/Form Elements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validators";
import "./NewPlace.css";
const NewPlace = () => {
	return (
		<form className="place-form">
			<Input
				type="text"
				id="title"
				el="input"
				label="Title"
				errorText="Please enter a valid title"
				validators={[VALIDATOR_REQUIRE()]}
			/>
		</form>
	);
};
export default NewPlace;
