import { ComponentProps, useReducer } from "react";
import "./Input.css";

interface Props extends ComponentProps<"input"> {
	className?: string;
	label: string;
	el: string;
	errorText: string;
	rows?: number;
}
interface Action {
	type: string;
	payload: string;
}
interface State {
	enteredValue: string;
	isValid: boolean;
}
const inputReducer = (state: State, action: Action) => {
	if (action.type === "CHANGE") {
		return {
			...state,
			enteredValue: action.payload,
			isValid: true,
		};
	}
	return state;
};
const initialState: State = {
	enteredValue: "",
	isValid: false,
};
const Input = ({
	label,
	id,
	el,
	type,
	placeholder,
	rows,
	errorText,
}: Props) => {
	const [state, dispatch] = useReducer(inputReducer, initialState);
	const changeHandler = (e: any) => {
		dispatch({ type: "CHANGE", payload: e.target.value });
	};
	const element =
		el === "input" ? (
			<input
				type={type}
				id={id}
				placeholder={placeholder}
				onChange={changeHandler}
				value={state.enteredValue}
			/>
		) : (
			<textarea
				rows={rows || 3}
				id={id}
				onChange={changeHandler}
				value={state.enteredValue}
			/>
		);
	return (
		<div
			className={`form-control ${!state.isValid && "form-control--invalid"}`}
		>
			<label htmlFor={id}>{label}</label>
			{element}
			{!state.isValid && <p>{errorText}</p>}
		</div>
	);
};
export default Input;
