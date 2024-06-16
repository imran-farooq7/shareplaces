import { useReducer } from "react";
import Input from "../../shared/Form Elements/Input";
import { VALIDATOR_REQUIRE } from "../../shared/utils/validators";
import "./NewPlace.css";
import Button from "../../shared/Form Elements/Button";
interface Action {
	type: string;
	payload: {
		value: string;
		isValid: boolean;
		inputId: string;
	};
}
interface State {
	inputs: {
		title: {
			value: string;
			isValid: boolean;
		};
		description: {
			value: string;
			isValid: boolean;
		};
	};
	isValid: boolean;
}
const initialState: State = {
	inputs: {
		title: {
			isValid: false,
			value: "",
		},
		description: {
			isValid: false,
			value: "",
		},
	},
	isValid: false,
};
const formReducer = (state: State, action: Action): State => {
	if (action.type === "INPUT_CHANGE") {
		let formValid = true;
		for (const inputId in state.inputs) {
			if (inputId === action.payload.inputId) {
				formValid = formValid && action.payload.isValid;
			} else {
				formValid = formValid && state.inputs[inputId].isValid;
			}
		}
		return {
			...state,
			inputs: {
				...state.inputs,
				[action.payload.inputId]: {
					value: action.payload.value,
					isValid: action.payload.isValid,
				},
			},
			isValid: formValid,
		};
	}
	return state;
};
const NewPlace = () => {
	const [state, dispatch] = useReducer(formReducer, initialState);
	const titleChangeHandler = (id: string, value: string, isValid: boolean) => {
		dispatch({
			type: "INPUT_CHANGE",
			payload: { inputId: id, isValid, value },
		});
	};
	return (
		<form className="place-form">
			<Input
				type="text"
				id="title"
				el="input"
				label="Title"
				errorText="Please enter a valid title"
				validators={[VALIDATOR_REQUIRE()]}
				getInput={titleChangeHandler}
			/>
			<Input
				id="description"
				el="textarea"
				label="description"
				errorText="Please enter a valid description"
				validators={[VALIDATOR_REQUIRE()]}
				getInput={titleChangeHandler}
			/>
			<Button type="submit" disabled={!state.isValid}>
				Add place
			</Button>
		</form>
	);
};
export default NewPlace;
