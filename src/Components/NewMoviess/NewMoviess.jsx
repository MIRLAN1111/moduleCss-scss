import { Button } from "../ul/button/Button";
import { Input } from "../ul/input/Input";
import "./NewMoviess.css";
import { useState } from "react";

export const NewMoviess = ({ state, setState }) => {
	const [moviesName, setMoviesName] = useState("");
	const [moviesPhoto, setMoviesPhoto] = useState("");
	const [moviesG, setMoviesG] = useState("");

	function valueInputs() {
		const NewMovies = {
			name: moviesName,
			photo: moviesPhoto,
			genre: moviesG,
		};
		setState([...state, NewMovies]);
		setMoviesName("");
		setMoviesPhoto("");
		setMoviesG("");
	}
  console.log(moviesName);
	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				valueInputs();
			}}>
			<Input
				type="text"
				style="inputMain"
				value={moviesName}
				setData={setMoviesName}
			/>
			<Input
				type="url"
				style="inputMain"
				value={moviesPhoto}
				setData={setMoviesPhoto}
			/>
			<Input
				type="text"
				style="inputMain"
				value={moviesG}
				setData={setMoviesG}
			/>
			<Button type='submit' text="Add" style="addButton" />
		</form>
	);
};
