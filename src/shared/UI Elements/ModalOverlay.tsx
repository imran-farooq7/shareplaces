interface Props {
	className?: string;
	style?: React.CSSProperties;
	headerClass?: string;
	header?: string;
	onSubmit?: React.FormEventHandler<HTMLFormElement>;
	contentClass?: string;
	children?: React.ReactNode;
	footer?: React.ReactNode;
	footerClass?: string;
}
const ModalOverlay = ({
	className,
	style,
	headerClass,
	header,
	onSubmit,
	contentClass,
	children,
	footer,
	footerClass,
}: Props) => {
	return (
		<div className={`modal ${className}`} style={style}>
			<header className={`modal__header ${headerClass}`}>
				<h2>{header}</h2>
			</header>
			<form onSubmit={onSubmit ? onSubmit : (e) => e.preventDefault()}>
				<div className={`modal__content ${contentClass}`}>{children}</div>
				<footer className={`modal__footer ${footerClass}`}>{footer}</footer>
			</form>
		</div>
	);
};
export default ModalOverlay;
