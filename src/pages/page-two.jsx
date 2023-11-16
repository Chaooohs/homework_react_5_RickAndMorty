import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router"

import { request } from "../metods/metods"
import { SingleCardCharacter } from "../components/SingleCardCharacter"
import { SingleCardLocation } from "../components/SingleCardLocation"
import { SingleCardEpisode } from "../components/SingleCardEpisode"
import { Lists } from "../components/Lists"

const PageTwo = () => {

  const navigate = useNavigate();
  const { category, id } = useParams()
  const [cards, setCards] = useState([])
  const [lists, setLists] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    request(`https://rickandmortyapi.com/api/${category}/${id}`).then(data => setCards(data))
  }, [category, id])

  const handlerGoBack = () => navigate(-1)
  const handlerOpenList = (list, categories) => {
    setLists(list)
    setCategories(categories)
  }

  return (
    <div className="two" key={id}>
      <div className="two__left">
        {category === 'character' && <SingleCardCharacter cards={cards} onOpenList={handlerOpenList} />}
        {category === 'location' && <SingleCardLocation cards={cards} onOpenList={handlerOpenList} />}
        {category === 'episode' && <SingleCardEpisode cards={cards} onOpenList={handlerOpenList} />}
        <button className="two__back button" onClick={handlerGoBack}>back</button>
      </div>
      <div className="two__right">
        <Lists lists={lists} categories={categories} />
      </div>
    </div>
  )
}
export { PageTwo }