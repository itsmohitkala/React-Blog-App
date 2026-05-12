import React from 'react'
import Configure from '../appwrite/Configure'

function PostCard({$id, tittle, featuredImage}) {

  return (
    <div className='w-full bg-black-20'>
        <img src={Configure.getFilePreview(featuredImage)} alt={tittle} />
        <h2>{tittle}</h2>
    </div>
  )
}

export default PostCard