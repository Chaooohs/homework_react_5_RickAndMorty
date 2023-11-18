import { Link, useLoaderData, } from "react-router-dom"

const Card = () => {

  const results = useLoaderData();

  let obj = {}

  if (results.catalog) obj = results.catalog.results
  if (results.results) obj = results.results

  const truncate = (str, maxlength) => str.length > maxlength ?
    str.slice(0, maxlength - 1) + '…' : str

  return (
    <>
      {
        obj.map((el) => {
          return (
            <Link className="card"
              key={`${el.id}`}
              to={`/${results.category}/${el.id}`}>
              <img className="card__image" src={el.image}></img>
              <p className="card__name">{truncate(el.name, 15)}</p>
              {
                results.category === 'location' &&
                <span className="card__text">{el.type}</span>
              }
              {
                results.category === 'episode' &&
                <span className="card__text">{el.episode}</span>
              }
            </Link>
          )
        })
      }
    </>
  )
}

export { Card }