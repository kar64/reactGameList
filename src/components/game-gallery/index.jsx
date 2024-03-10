import React from 'react'

export const GameGallery = ({images=[]}) => {
    let gallery=images.map((src,index)=><img src={src} alt='preview' key={index}/>)
  return (
    <div className='game-gallery'>
        {gallery}
    </div>
  )
}
