import Input from "../../shared/Form Elements/Input";
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
			/>
		</form>
	);
};
export default NewPlace;
