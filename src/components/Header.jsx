import { NavLink, Link } from 'react-router-dom'
import logo2 from '../img/logo2.png'
import { useState, useEffect } from 'react'

const Header = ({ tabs }) => {

  const [isOpen, setOpen] = useState(false)

  useEffect(() => document.body.classList.toggle('open', isOpen)[isOpen])

  return (
    <>
      <header>
        <div className={`header ${isOpen ? "open" : ""}`}>
          <div className="header_box container">
            <Link to="/">
              <img className='header__logo' src={logo2} alt="logo"></img>
            </Link>
            <div className="header_nav">
              {
                Object.entries(tabs).map((el) => {

                  let tab = el[0];
                  let category = el[1].split('/').slice(-1)[0];

                  return (
                    <NavLink
                      to={category}
                      key={el}
                      className="header__link hover_ylw"
                      onClick={() => setOpen(!isOpen)}>
                      {tab}
                    </NavLink>
                  )
                })
              }
            </div>
            <div className="burger" onClick={() => setOpen(!isOpen)}>
              <span className="burger__line burger__line_one"></span>
              <span className="burger__line burger__line_two"></span>
              <span className="burger__line burger__line_three"></span>
              <span className="burger__line burger__line_four"></span>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export { Header }