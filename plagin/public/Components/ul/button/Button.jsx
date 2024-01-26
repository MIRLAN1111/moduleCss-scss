import "./Button.css";

export const Button = ({ text, style, onClick }) => {
	return (
		<button onClick={onClick} className={style}>
			{text}
		</button>
	);
};
