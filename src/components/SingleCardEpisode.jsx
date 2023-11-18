import { Link } from "react-router-dom"

const SingleCardEpisode = ({ cards }) => {
  
  let characters = []
  cards.characters.map(el => characters.push(el.split('/').slice(-1)[0]))
 
  return (
    <div className="two__card card">
      <div className="two__descript">
        <p className="two__name card__name">{cards.name}</p>
        <div>
          <span className="two__status text_sm">Date:&nbsp;</span>
          <span className="two__status text_sm">{cards.air_date}</span>
        </div>
        <div>
          <span className="two__status text_sm">Episode:&nbsp;</span>
          <span className="two__status text_sm">{cards.episode}</span>
        </div>
        <div className="two__link_wrap">
          <Link className="two__link btn_txt text_sm hover_rd"
            to={`/character/${characters}`}>Characters &#10149;</Link>
        </div>
      </div>
    </div>
  )
}

export { SingleCardEpisode }