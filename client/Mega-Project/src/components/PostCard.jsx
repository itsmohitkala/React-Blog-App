import React from 'react'
import config from '../config/Config'
import { Link } from 'react-router'

function PostCard({featuredImage,title,content,$id}) {
  return (

<Link to={`/post/${$id}`}>
    <div>
      <img src={config.getFilePreview(featuredImage)} alt={title} />
      <h2>{title}</h2>
      <p>{content}</p>

    </div>
</Link>
  )
}

export default PostCard