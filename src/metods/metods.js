const buttonBurger = document.querySelector('.burger')
const header = document.querySelector('.header')

export async function request(url) {
  const data = await fetch(url)
  return await data.json()
}

// const renameProp = (oldProp, newProp, { [oldProp]: old }) =>
//   ({ [newProp]: old })