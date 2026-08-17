import React from 'react'
import config from '../config/Config'
import { Link } from 'react-router'

function PostCard({featuredImage,title,content,$id}) {
  return (

<Link to={`/post/${$id}`}>
    <div className="overflow-hidden rounded-lg border border-[var(--color-border)] bg-white shadow-sm transition-shadow hover:shadow-md">
      <img src={config.getFilePreview(featuredImage)} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-semibold text-[var(--color-ink)]">{title}</h2>
        <p className="line-clamp-3 text-sm text-[var(--color-muted)]">{content}</p>
      </div>
    </div>
</Link>
  )
}

export default PostCard