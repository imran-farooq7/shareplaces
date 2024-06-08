import { ComponentProps, useReducer } from "react";
import "./Input.css";
import { validate } from "../utils/validators";

interface Props extends ComponentProps<"input"> {
	className?: string;
	label: string;
	el: string;
	errorText: string;
	rows?: number;
	validators: any[];
}
interface Action {
	type: string;
	payload?: {
		value: string;
		validators: string[];
	};
}
interface State {
	enteredValue: string;
	isValid: boolean;
	touched: boolean;
}
const inputReducer = (state: State, action: Action): State => {
	if (action.type === "CHANGE") {
		return {
			...state,
			enteredValue: action.payload!.value,
			isValid: validate(action.payload!.value, action.payload!.validators),
		};
	}
	if (action.type === "TOUCH") {
		return {
			...state,
			touched: true,
		};
	}
	return state;
};
const initialState: State = {
	enteredValue: "",
	isValid: false,
	touched: false,
};
const Input = ({
	label,
	id,
	el,
	type,
	placeholder,
	rows,
	errorText,
	validators,
}: Props) => {
	const [state, dispatch] = useReducer(inputReducer, initialState);
	const changeHandler = (e: any) => {
		dispatch({
			type: "CHANGE",
			payload: {
				value: e.target.value,
				validators,
			},
		});
	};
	const touchHandler = () => {
		dispatch({ type: "TOUCH" });
	};
	const element =
		el === "input" ? (
			<input
				type={type}
				id={id}
				placeholder={placeholder}
				onChange={changeHandler}
				value={state.enteredValue}
				onBlur={touchHandler}
			/>
		) : (
			<textarea
				rows={rows || 3}
				id={id}
				onChange={changeHandler}
				value={state.enteredValue}
				onBlur={touchHandler}
			/>
		);
	return (
		<div
			className={`form-control ${
				!state.isValid && state.touched && "form-control--invalid"
			}`}
		>
			<label htmlFor={id}>{label}</label>
			{element}
			{!state.isValid && state.touched && <p>{errorText}</p>}
		</div>
	);
};
export default Input;
