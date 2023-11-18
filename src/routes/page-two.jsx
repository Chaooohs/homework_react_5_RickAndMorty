import { useLoaderData, } from "react-router-dom"

import { SingleCardCharacter } from "../components/SingleCardCharacter"
import { SingleCardLocation } from "../components/SingleCardLocation"
import { SingleCardEpisode } from "../components/SingleCardEpisode"
import { BackButton } from "../components/backButton"
import { Card } from "../components/Card"


const PageTwo = () => {

  const { results, category, } = useLoaderData();

  return (
    <>
      {
        Array.isArray(results) ?
          <div className="two__content mg_top">
            <div className="container">
              <BackButton />
            </div>
            <div className="container">
              <div className="box__content pd_top">
                <Card />
              </div>
            </div>
          </div>
          :
          <div className="two">
            <div className="two__content container">
              <BackButton />
              {category === 'character' && <SingleCardCharacter cards={results} />}
              {category === 'location' && <SingleCardLocation cards={results} />}
              {category === 'episode' && <SingleCardEpisode cards={results} />}
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
  const results = await res.json()

  if (!results || results.error) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { results, category, }
}

export { PageTwo, singleLoader }