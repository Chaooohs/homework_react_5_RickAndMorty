
const SingleCardEpisode = ({ cards, onOpenList }) => {

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
          <button className='two__link btn_txt text_sm hover_rd' onClick={() => onOpenList(cards.characters, 'character')}>Characters &#10149;</button>
        </div>
      </div>
    </div>
  )
}

export { SingleCardEpisode }