const getResys = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
}

// const postResys = () => {
//   return {
//     method: 'POST',
//     content
//   }
// }

export default getResys;