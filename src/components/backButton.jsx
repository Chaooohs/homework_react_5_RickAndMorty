import { useNavigate } from "react-router-dom";

const BackButton = () => {

  const navigate = useNavigate();
  const handlerGoBack = () => navigate(-1)

  return (
    <button className="two__back button" onClick={handlerGoBack}>back</button>
  )
}

export { BackButton }