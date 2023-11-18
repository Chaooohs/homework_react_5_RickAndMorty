import { Link } from "react-router-dom"

const SingleCardLocation = ({ cards, }) => {

  let residents = []
  cards.residents.map(el => residents.push(el.split('/').slice(-1)[0]))
 
  return (
    <div className="two__card card">
      <div className="two__descript">
        <p className="two__name card__name">{cards.name}</p>
        <div>
          <span className="two__status text_sm">Type:&nbsp;</span>
          <span className="two__status text_sm">{cards.type}</span>
        </div>
        <div>
          <span className="two__status text_sm">Dimension:&nbsp;</span>
          <span className="two__status text_sm">{cards.dimension}</span>
        </div>
        <div className="two__link_wrap">
          <Link className="two__link btn_txt text_sm hover_rd"
            to={`/character/${residents}`}>Residents &#10149;</Link>
        </div>
      </div>
    </div>
  )
}

export { SingleCardLocation }
