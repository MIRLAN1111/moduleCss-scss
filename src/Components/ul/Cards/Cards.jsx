import style from './Card.module.css'
export const Card = ({data}) => {
  return <div>
    {data.map((item) => {
      return (
        <div className={style.vrap2}>
          <h2>{item.name}</h2>
          <img src={item.photo} alt={item.name} />
          <p>{item.nameG}</p>
        </div>
      )
    })}
  </div>
}
