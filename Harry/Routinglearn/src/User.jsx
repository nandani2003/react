import React from 'react'
import { useParams } from 'react-router-dom'
export default function User() {
  const params=useParams()
  return (
    <div>
     I user {params.username}
    </div>
  )
}
