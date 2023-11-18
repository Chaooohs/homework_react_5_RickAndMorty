import { Link } from "react-router-dom"

const SingleCardCharacter = ({ cards }) => {

  const location = cards.location.url.split('/').slice(-1)[0]
  let episode = []
  cards.episode.map(el => episode.push(el.split('/').slice(-1)[0]))

  return (
    <div className="two__card card">
      <img src={cards.image}></img>
      <div className="two__descript">
        <p className="two__name card__name">{cards.name}</p>
        <div className="two__status_wrap">
          {cards.status === 'Alive' &&
            <>
              <span className="two__status text_sm" style={{ color: "#009b7d" }}>{cards.status}</span>
              <span className="two__status text_sm">&nbsp;&ndash;&nbsp;</span>
            </>
          }
          {cards.status === 'Dead' &&
            <>
              <span className="two__status text_sm" style={{ color: "#ea3c53" }}>{cards.status}</span>
              <span className="two__status text_sm">&nbsp;&ndash;&nbsp;</span>
            </>
          }
          <span className="two__status text_sm">{cards.species}&nbsp;&ndash;&nbsp;</span>
          <span className="two__status text_sm">{cards.gender}</span>
        </div>
        <div className="two__link_wrap">
          <Link className="two__link btn_txt text_sm hover_rd"
            to={`/location/${location}`}>Origin &#10149;</Link>
          <Link className="two__link btn_txt text_sm hover_rd"
            to={`/location/${location}`}>Location &#10149;</Link>
          <Link className="two__link btn_txt text_sm hover_rd"
            to={`/episode/${episode}`}>Eposode &#10149;</Link>
        </div>
      </div>
    </div>
  )
}

export { SingleCardCharacter }

