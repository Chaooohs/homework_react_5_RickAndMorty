import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router"
import { useState, useEffect } from "react"
import { request } from "./metods/metods"

import { Layout } from "./components/Layout"
import { MainPage } from "./pages/main-page"
import { PageOne } from "./pages/page-one"
import { PageTwo } from "./pages/page-two"
import { NotFound } from "./pages/page-notfnd"

const App = () => {

  const [tabs, setTabs] = useState([])

  useEffect(() => {
    request("https://rickandmortyapi.com/api/")
      .then(data => setTabs(data))
  }, [])

  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Layout tabs={tabs} />} >
            <Route index element={<MainPage />} />
            <Route path=":category" element={<PageOne />} />
            <Route path=":category/:id" element={<PageTwo />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}


export default App