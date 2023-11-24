import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useClickOutside } from '../hooks/useClickOutside'
import logo from '../img/logo.png'

const Header = ({ tabs }) => {

  const [isOpen, setOpen] = useState(false)

  useEffect(() => document.body.classList.toggle('open', isOpen)[isOpen])

  const ref = useRef()
  useClickOutside(ref, () => setOpen(false))

  return (
    <>
      <header>
        <div className={`header ${isOpen ? "open" : ""}`}>
          <div className="header_box container">
            <Link className='header__logo'  to="/">
              <img src={logo} alt="logo"></img>
            </Link>
            <nav ref={ref}>
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
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export { Header }