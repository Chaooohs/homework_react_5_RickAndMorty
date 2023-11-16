import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { request } from "../metods/metods"


const Lists = ({ lists, categories }) => {

  const [choise, setChoise] = useState([])

  let array = []
  if (Array.isArray(lists)) lists.map(el => array.push(el.split('/').slice(-1)[0]))
  if (!Array.isArray(lists)) Object.values(lists).filter((el) => {
    if (el.includes('https')) {
      return array = el.split('/').slice(-1)[0]
    }
  })

  useEffect(() => {
    request(`https://rickandmortyapi.com/api/${categories}/${array}`).then(data => setChoise(data))
  }, [lists])

  return (
    <>
      <div className="two__list">
        {
          choise.length > 0 && categories === 'character' &&
          <div className="two__list_image">
            {
              choise.map((el) => {
                return (
                  <Link className="two__list_image_link" to={`/${categories}/${el.id}`} key={el.id}>
                    <img src={el.image}></img>
                  </Link>
                )
              })
            }
          </div>
        }
        {
          choise.length > 0 && categories === 'episode' &&
          <div className="two__list_text">
            {
              choise.map((el) => {
                return (
                  <Link className="two__list_link text_sm hover_rd two__link"
                    to={`/${categories}/${el.id}`}
                    key={el.id}>
                    {`${el.episode} - ${el.name}`}
                  </Link>
                )
              })
            }
          </div>
        }
        {
          choise.id !== undefined &&
          <div className="two__list_text">
            <Link className="two__list_link text_sm hover_rd two__link"
              to={`/${categories}/${choise.id}`}
              key={choise.id}>
              {choise.name}
            </Link>
          </div>
        }
      </div >
    </>
  )
}

export { Lists }