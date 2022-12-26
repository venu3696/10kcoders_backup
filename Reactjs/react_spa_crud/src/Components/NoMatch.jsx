import React from 'react'
import { Link } from 'react-router-dom'

export default function NoMatch() {
  return (
    <div>
      <h3>Nothing to see here...!</h3>
      <p><Link to="/" >to go home page</Link></p>
    </div>
  )
}