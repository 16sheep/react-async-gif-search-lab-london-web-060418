import React from 'react'

const GifList = (props) => {
    console.log("giflist props", props)
    let lis = props.gifs.map(gif => <li><img src={gif.images.original.url}/></li>) 
   return (
     <ul>
      {lis}
     </ul>
  )
}
//gif => <li><img src=gif.url/></li>)
export default GifList
