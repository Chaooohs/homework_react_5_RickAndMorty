import { useState } from "react";
import { Select } from "../components/Select";

const Form = ({ category, setSearchParams, paramsFeedback }) => {

  const [search, setSearch] = useState(paramsFeedback)

  const handleSubmit = (e) => {
    e.preventDefault()
    const nameQuery = e.target.search.value
    const statusQuery = e.target.status.value 
    const genderQuery = e.target.gender.value 
    const speciesQuery = e.target.species.value 

    const params = {}
    if (nameQuery.length) params.name = nameQuery
    if (statusQuery.length) params.status = statusQuery
    if (genderQuery.length) params.gender = genderQuery
    if (speciesQuery.length) params.species = speciesQuery

    setSearchParams(params)
  }

  const clear = () => {
    setSearch({ name: '' })
  }

  return (
    <form onSubmit={handleSubmit} id="form">
      <div className="form container">
        <div className="form__search">
          <input className="form__input" type="text" name="search" value={search.name} onChange={e => setSearch(e.target.value)}></input>
          <button className="form__button button" type="submit">go</button>
        </div>

        <button className="form__reset btn_txt text_sm hover_rd" type="reset" from="form" onClick={clear}>clear</button>
        
        <Select search={search} />
      </div>
    </form>
  )
}

export { Form }