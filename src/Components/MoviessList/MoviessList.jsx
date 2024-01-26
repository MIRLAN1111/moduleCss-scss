import  Movi  from "../Movi/Movi";
import "./MoviessList.css";
import {useState} from 'react';

export const MoviessList = ({ state, setState }) => {
  const [stateResult, setStateResult] = useState("");
	const removeCard = (id) => {
		const deleteCards = [...state, stateResult];
    deleteCards.splice(id, 1);
    setState(deleteCards);
	};

	return (
		<div>
			{state.map(({ name, photo, gh, id }) => (
				<Movi
					key={id}
					name={name}
					photo={photo}
					gh={gh}
					onClick={() => removeCard(id)}
				/>
			))}
		</div>
	);
};
