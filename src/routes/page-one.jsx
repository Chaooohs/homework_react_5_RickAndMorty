import { useSearchParams, useLoaderData, } from "react-router-dom";
import { useEffect, } from "react";

import { Image } from "../components/Image";
import { Form } from "../components/Form";
import { Tracker } from "../components/Tracker"
import { Card } from "../components/Card";

const PageOne = () => {

  const { catalog, category, } = useLoaderData()
  const [searchParams, setSearchParams] = useSearchParams()

  const paramsFeedback = {}
  paramsFeedback.name = searchParams.get('name') || ''
  paramsFeedback.status = searchParams.get('status') || ''
  paramsFeedback.gender = searchParams.get('gender') || ''
  paramsFeedback.species = searchParams.get('species') || ''


  useEffect(() => window.scrollTo(0, 0));
  const handleTrack = (track) => setSearchParams(track)

  return (
    <>
      {
        category === 'character' &&
        <>
          <Image />
          <Form setSearchParams={setSearchParams} paramsFeedback={paramsFeedback} />
        </>
      }
      <div className="box__content container">
        <Card />
      </div>
      <Tracker catalog={catalog} onTrack={handleTrack} />
    </>
  );
};


const categoryLoader = async ({ request, params }) => {

  const category = params.category
  const url = new URL(request.url);
  const search = "?" + url.searchParams.toString();

  const res = await fetch(`https://rickandmortyapi.com/api/${category}${search}`)
  const catalog = await res.json()

  if (!catalog || catalog.error) {
    throw new Response("", {
      status: 404,
      statusText: "Not Found",
    });
  }
  return { catalog, category, }
}
export { PageOne, categoryLoader };