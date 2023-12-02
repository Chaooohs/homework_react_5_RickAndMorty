import { useState, useRef } from "react"
import { useClickOutside } from '../hooks/useClickOutside'


const Selects = ({ search }) => {

  const refStatus = useRef()
  useClickOutside(refStatus, () => setStatus(false))

  const refGenger = useRef()
  useClickOutside(refGenger, () => setGender(false))
  
  const refSpecies = useRef()
  useClickOutside(refSpecies, () => setSpecies(false))

  const [isStatus, setStatus] = useState(false)
  const [isStatusValue, setStatusValue] = useState()

  const [isGender, setGender] = useState(false)
  const [isGenderValue, setGenderValue] = useState()

  const [isSpecies, setSpecies] = useState(false)
  const [isSpeciesValue, setSpeciesValue] = useState()

  const menuSelect = (e) => {
    e.preventDefault()
  }

  const menuStatus = (e) => {
    const a = document.querySelector('[data-input="status"]')
    a.setAttribute('value', e.target.dataset.type)
    setStatusValue(a.getAttribute("value"))
  }

  const menuGender = (e) => {
    const b = document.querySelector('[data-input="gender"]')
    b.setAttribute('value', e.target.dataset.type)
    setGenderValue(b.getAttribute("value"))
  }

  const menuSpecies = (e) => {
    const с = document.querySelector('[data-input="species"]')
    с.setAttribute('value', e.target.dataset.type)
    setSpeciesValue(с.getAttribute("value"))
  }

  // console.log(search)
  return (
    <>
      <div className="select__wrap">

        <div
          className="select__layout"
          onClick={() => setStatus(!isStatus)}
          ref={refStatus}
        >
          <span className="text_500" >status:</span>
          <input
            className="select text_500"
            name="status"
            data-input="status"
            defaultValue={isStatusValue}
            onMouseDown={menuSelect}
            placeholder="filter"
          >
          </input>
          <div className={`option ${isStatus ? "option_open" : ""}`}>
            <div data-type="&emsp;" onClick={menuStatus}>&emsp;</div>
            <div data-type="alive" onClick={menuStatus}>alive</div>
            <div data-type="dead" onClick={menuStatus}>dead</div>
            <div data-type="unknow" onClick={menuStatus}>unknow</div>
          </div>
        </div>

        <div
          className="select__layout"
          onClick={() => setGender(!isGender)}
          ref={refGenger}
        >
          <span className="text_500">gender:</span>
          <input
            className="select text_500"
            name="gender"
            data-input="gender"
            defaultValue={isGenderValue}
            onMouseDown={menuSelect}
            placeholder="filter"
          >
          </input>
          <div className={`option ${isGender ? "option_open" : ""}`}>
            <div data-type="female" onClick={menuGender}>female</div>
            <div data-type="male" onClick={menuGender}>male</div>
            <div data-type="genderless" onClick={menuGender}>genderless</div>
            <div data-type="unknow" onClick={menuGender}>unknow</div>
          </div>
        </div>

        <div
          className="select__layout"
          onClick={() => setSpecies(!isSpecies)}
          ref={refSpecies}
        >
          <span className="text_500">species:</span>
          <input
            className="select text_500"
            name="species"
            data-input="species"
            defaultValue={isSpeciesValue}
            onMouseDown={menuSelect}
            placeholder="filter"
          >
          </input>
          <div className={`option ${isSpecies ? "option_open" : ""}`}>
            <div data-type="human" onClick={menuSpecies}>human</div>
            <div data-type="humanoid" onClick={menuSpecies}>humanoid</div>
            <div data-type="alien" onClick={menuSpecies}>alien</div>
            <div data-type="poopybutthole" onClick={menuSpecies}>poopybutthole</div>
            <div data-type="mythological" onClick={menuSpecies}>mythological</div>
            <div data-type="animal" onClick={menuSpecies}>animal</div>
            <div data-type="robot" onClick={menuSpecies}>robot</div>
            <div data-type="cronenberg" onClick={menuSpecies}>cronenberg</div>
            <div data-type="disease" onClick={menuSpecies}>disease</div>
            <div data-type="unknow" onClick={menuSpecies}>unknow</div>
          </div>
        </div>

      </div >
    </>
  )
}

export { Selects }