import { Outlet, useLoaderData } from "react-router-dom"

import { Header } from "../components/Header"
import { Footer } from "../components/Footer"


const rootLoader = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/")
  return res.json()
}


const Root = () => {

  const tabs = useLoaderData();

  return (
    <>
      <Header tabs={tabs} />
      <div className="box">

        <Outlet />

      </div>
      <Footer />
    </>
  )
}

export { Root, rootLoader }