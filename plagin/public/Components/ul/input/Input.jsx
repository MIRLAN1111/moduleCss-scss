import './Input.css';

export const Input = ({type, style, setData}) => {
  return <input className={style} type={type} onChange={(event) => {
    setData(event.target.value);
  }}/>
}