import "./Button.css";
import styled from "styled-components";
export const Button = ({ text, style, onClick }) => {
	const Styled =styled.button`
		width:200px;
		height: 40px;
		background-color: red;
border-radius: 10px;
	`
	return (
		<Styled onClick={onClick} className={style}>
			{text}
		</Styled>
	);
};
