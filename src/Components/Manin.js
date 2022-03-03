
import { useState } from 'react';
import React from 'react';
export const Manin = () => {
    const [imgUrl, setImgUrl] = useState('https://cdn2.thecatapi.com/images/5hRxfIwWQ.png')
    const imgHandler = () => {
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(Response => Response.json())
        .then(data => setImgUrl(data[0].url))
    }
  return (
     <>
         <div className='container'>
             <div className='box'>
                 <h1> Enjoy the kitty 😺 </h1>
                 <img className='img' src={imgUrl}></img><br/>
                 <button className='btn' onClick={imgHandler}>Meow</button>
             </div>
         </div>

     </>
  )
}
