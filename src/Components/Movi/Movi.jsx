import { Button } from '../ul/button/Button';
// import './Movi.css';
import {useState} from 'react';
import style from 'styled-components'

 const  Movi = ({name, photo, gh, id, onClick}) => {
  const Style = style.div`
    width: 100%;
    height: auto;
    border-radius: 20px;
    margin-bottom: 8px;
  `
  const [state, setState] = useState(undefined);

  return (
    <Style key={id}>
      <h3>{name}</h3>
      <img src={photo} alt={name} />
      <p>{gh}</p>
      <Button onClick={onClick} text='Delete'/>
    </Style>
  )
}
export default Movi