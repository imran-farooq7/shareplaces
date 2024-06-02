import { CSSTransition } from "react-transition-group";
import Backdrop from "./Backdrop";
import "./Modal.css";
import ModalOverlay from "./ModalOverlay";

interface Props {
	show: boolean;
	onCancel: () => void;
	address: string;
	contentClass: string;
	footClass: string;
	footer: React.ReactNode;
	children: React.ReactNode;
}

const Modal = ({
	show,
	onCancel,
	address,
	contentClass,
	footClass,
	footer,
	children,
}: Props) => {
	return (
		<>
			{show && <Backdrop onClick={onCancel} />}
			<CSSTransition
				in={show}
				timeout={200}
				mountOnEnter
				unmountOnExit
				classNames={"modal"}
			>
				<ModalOverlay
					header={address}
					contentClass={contentClass}
					footerClass={footClass}
					footer={footer}
					children={children}
				/>
			</CSSTransition>
		</>
	);
};
export default Modal;
