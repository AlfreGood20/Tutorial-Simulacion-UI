import React from 'react'

export default function Iframe({link}) {
  return (
    <iframe
        src={link}
        title="Video"
        allowFullScreen
        className="w-full h-100 rounded-lg shadow-lg border mt-3"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  )
}
