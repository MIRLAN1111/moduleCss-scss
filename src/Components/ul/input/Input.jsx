import './Input.css';
import input, { styled } from 'styled-components'
export const Input = ({type, style, setData}) => {
  const Input=styled.input`
    width: 300px;
    height: 40px;
    border-radius: 30px;
  `
  return <Input className={style} type={type} onChange={(event) => {
    setData(event.target.value);
  }}/>
}