import { Link } from "react-router-dom"

const Card = ({ catalog, category }) => {

  const truncate = (str, maxlength) => str.length > maxlength ?
    str.slice(0, maxlength - 1) + '…' : str

  return (
    <div className="box__content container">
      {
        catalog.results.map((el, index) => {

          if (category === 'character') {
            return (
              <Link className="card"
                key={`${index}`}
                to={`${el.id}`}>
                <img className="card__image" src={el.image}></img>
                <p className="card__name">{truncate(el.name, 15)}</p>
              </Link>
            )
          }
          else if (category === 'location') {
            return (
              <Link className="card"
                key={index}
                to={`${el.id}`}>
                <p className="card__name">{truncate(el.name, 16)}</p>
                <span className="card__text">{el.type}</span>
              </Link>
            )
          }
          else if (category === 'episode') {
            return (
              <Link className="card"
                key={index}
                to={`${el.id}`}>
                <p className="card__name">{truncate(el.name, 16)}</p>
                <span className="card__text">{el.episode}</span>
              </Link>
            )
          }
        })
      }
    </div>
  )
}

export { Card }