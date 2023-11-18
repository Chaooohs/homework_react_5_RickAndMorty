// import { Link, useLoaderData, } from "react-router-dom"
// import { BackButton } from "./backButton";


// const List = () => {

//   const results = useLoaderData();

//   const truncate = (str, maxlength) => str.length > maxlength ?
//     str.slice(0, maxlength - 1) + '…' : str

//   return (
//     <div className="list two__content">
//       <div className=" container">
//         <BackButton />
//       </div>
//       <div className="box__content container list__content">
//         {
//           results.cards.map((el) => {
//             return (
//               <Link className="card"
//                 key={`${el.id}`}
//                 to={`/${results.category}/${el.id}`}>
//                 <img className="card__image" src={el.image}></img>
//                 <p className="card__name">{truncate(el.name, 15)}</p>
//                 {
//                   results.category === 'episode' &&
//                   <span className="card__text">{el.episode}</span>
//                 }
//               </Link>
//             )
//           })
//         }
//       </div>
//     </div>
//   )
// }

// export { List, }