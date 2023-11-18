import { Image } from "../components/Image"


const Index = () => {
  return (
    <div className="box__index">
      <p>
        Rick and Morty
        <br />
        Check out{" "}
        <a href="https://rickandmortyapi.com/">
          The Rick and Morty API
        </a>
        .
      </p>
      <Image />
    </div>
  );
}

export { Index }