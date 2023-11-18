import { useLoaderData, } from "react-router-dom"

import { SingleCardCharacter } from "../components/SingleCardCharacter"
import { SingleCardLocation } from "../components/SingleCardLocation"
import { SingleCardEpisode } from "../components/SingleCardEpisode"
import { BackButton } from "../components/backButton"
import { List, } from "../components/List"


const PageTwo = () => {

  const { cards, category, } = useLoaderData();

  return (
    <>
      {
        Array.isArray(cards) ?
          <List />
          :
          <div className="two">
            <div className="two__content container">
              <BackButton />
              {category === 'character' && <SingleCardCharacter cards={cards} />}
              {category === 'location' && <SingleCardLocation cards={cards} />}
              {category === 'episode' && <SingleCardEpisode cards={cards} />}
            </div>
          </div>
      }
    </>
  )
}


const singleLoader = async ({ params }) => {
  const category = params.category
  const id = params.id
  const res = await fetch(`https://rickandmortyapi.com/api/${category}/${id}`)
  const cards = await res.json()

  if (!cards || cards.error) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { cards, category, }
}

export { PageTwo, singleLoader }