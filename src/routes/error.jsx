import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1 className="error-page__title">Oops!</h1>
      <p className="error-page__subtitle">Sorry, an unexpected error has occurred.</p>
      <p className="error-page__errror">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export { ErrorPage }