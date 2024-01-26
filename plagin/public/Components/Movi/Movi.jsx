import { Button } from '../ul/button/Button';
import './Movi.css';
import {useState} from 'react';

export const Movi = ({name, photo, gh, id, onClick}) => {
  const [state, setState] = useState(undefined);

  return (
    <div key={id}>
      <h3>{name}</h3>
      <img src={photo} alt={name} />
      <p>{gh}</p>
      <Button onClick={onClick} text='Delete'/>
    </div>
  )
}