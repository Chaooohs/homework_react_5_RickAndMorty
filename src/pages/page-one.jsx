import { useParams, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { request } from "../metods/metods";
import { Image } from "../components/Image";
import { Form } from "../components/Form";
import { Tracker } from "../components/Tracker"
import { Card } from "../components/Card";

const PageOne = () => {

  const { category } = useParams();
  const [catalog, setCatalog] = useState();
  const [searchParams, setSearchParams] = useSearchParams()

  const track = '?' + searchParams.toString() || ''

  const paramsFeedback = {}
  paramsFeedback.name = searchParams.get('name') || ''
  paramsFeedback.status = searchParams.get('status') || ''
  paramsFeedback.gender = searchParams.get('gender') || ''
  paramsFeedback.species = searchParams.get('species') || ''

  useEffect(() => {
    request(`https://rickandmortyapi.com/api/${category}${track}`).then(data => setCatalog(data))
  }, [category, searchParams]);

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
      {
        catalog === undefined || catalog.error ?
          <div style={{ padding: "100px 0", textAlign: "center", color: "#fff" }}>😭</div>
          :
          <>
            <Card catalog={catalog} category={category} />
            <Tracker catalog={catalog} onTrack={handleTrack} />
          </>
      }
    </>
  );
};

export { PageOne };