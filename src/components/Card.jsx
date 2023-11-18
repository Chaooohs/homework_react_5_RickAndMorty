import { Link } from "react-router-dom"

const Card = ({ catalog, category }) => {

  const truncate = (str, maxlength) => str.length > maxlength ?
    str.slice(0, maxlength - 1) + '…' : str

  return (
    <div className="box__content container">
      {
        catalog.results.map((el) => {

          return (
            <Link className="card"
              key={`${el.id}`}
              to={`${el.id}`}>
              <img className="card__image" src={el.image}></img>
              <p className="card__name">{truncate(el.name, 15)}</p>
              {
                category === 'location' &&
                <span className="card__text">{el.type}</span>
              }
              {
                category === 'episode' &&
                <span className="card__text">{el.episode}</span>
              }
            </Link>
          )
        })
      }
    </div >
  )
}

export { Card }