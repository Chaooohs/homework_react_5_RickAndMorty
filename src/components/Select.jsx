
const Select = ({ search }) => {

  return (
    <>
      <div className="select__wrap">
        <div className="select__layout">
          <label className="text_md" htmlFor="sel1">status
            <div>&#10149;</div>
          </label>
          <select className="select text_sm" name="status" id="sel1">
            <option className="select__option" defaultValue value="">{search.status}</option>
            <option className="select__option" value="alive">alive</option>
            <option className="select__option" value="dead">dead</option>
            <option className="select__option" value="unknow">unknow</option>
          </select>
        </div>

        <div className="select__layout">
          <label className="text_md" htmlFor="sel2">gender
            <div>&#10149;</div>
          </label>
          <select className="select text_sm" name="gender" id="sel2">
            <option className="select__option" defaultValue value="">{search.gender}</option>
            <option className="select__option" value="female">female</option>
            <option className="select__option" value="male">male</option>
            <option className="select__option" value="genderless">genderless</option>
            <option className="select__option" value="unknown">unknown</option>
          </select>
        </div>

        <div className="select__layout">
          <label className="text_md" htmlFor="sel3">species
            <div>&#10149;</div>
          </label>
          <select className="select text_sm" name="species" id="sel3">
            <option className="select__option" defaultValue value="">{search.species}</option>
            <option className="select__option" value="human">human</option>
            <option className="select__option" value="humanoid">humanoid</option>
            <option className="select__option" value="genderless">alien</option>
            <option className="select__option" value="poopybutthole">poopybutthole</option>
            <option className="select__option" value="mythological creature">mythological</option>
            <option className="select__option" value="animal">animal</option>
            <option className="select__option" value="robot">robot</option>
            <option className="select__option" value="cronenberg">cronenberg</option>
            <option className="select__option" value="disease">disease</option>
            <option className="select__option" value="unknown">unknown</option>
          </select>
        </div>
      </div>
    </>
  )
}

export { Select }