import { Header } from "./Header"
import { Footer } from "./Footer"
import { Outlet } from "react-router"


const Layout = ({ tabs }) => {

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

export { Layout }