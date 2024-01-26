
import { Card } from '../ul/Cards/Cards';
import { Button } from '../ul/button/Button';
import {useState} from 'react';
import './Main.css';
// import style from 'styled-components'
const data = [
  {
    name: 'Аватар',
    photo: 'https://static.tvtropes.org/pmwiki/pub/images/avatar_poster_4.png',
    nameG: 'Фантастика',
  },
  {
    name: 'Дорамы',
    photo: 'https://thumbs.dfs.ivi.ru/storage33/contents/7/d/cbd54f8424d24f1ce3edec2f42063a.jpg/162x248/?q=85',
    nameG: 'дорамы',
  },
  {
    name: 'Мультики',
    photo: 'https://n1s1.hsmedia.ru/5b/88/10/5b8810800181f88705307da7ee2b4439/600x600_1_8813a5bc554a6e3c1b2c70031dbce21c@1036x1036_0xac120004_464440591685275251.jpeg',
    nameG:  'Любовь',
  },
]

const Main = () => {
  // const Styled = style.Button`
  //   display: flex;
  //   justify-content: center;
  //   margin: 10px;
    
  // `
  const [stateResult1, setStateResult1] = useState(data);
  const [stateresult, setStateResult] = useState("");
  function getCards (stateresult) {
    const result = stateResult1.filter((item) => item.nameG === stateresult);
    setStateResult1(result);
    console.log(result);
  }
  function resultGet (e) {
    setStateResult(e.target.innerText);
    getCards(e.target.innerText);
  }
  return (
    <div>
      <div>
        <div>
          <Button text='Фантастика' style='button1' onClick={resultGet}/>
          <Button text='Любовь' style='button'onClick={resultGet}/>
          <Button text='дорамы' style='button1' onClick={resultGet}/>
        </div>
        <div className='cards'>
          <Card start ={stateresult} data={stateResult1}/>
        </div>
      </div>
    </div>
  )
}

export default Main