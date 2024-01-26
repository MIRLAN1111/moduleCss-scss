import './Cards.css';

export const Card = ({data}) => {
  return <div>
    {data.map((item) => {
      return (
        <div>
          <h2>{item.name}</h2>
          <img src={item.photo} alt={item.name} />
          <p>{item.nameG}</p>
        </div>
      )
    })}
  </div>
}