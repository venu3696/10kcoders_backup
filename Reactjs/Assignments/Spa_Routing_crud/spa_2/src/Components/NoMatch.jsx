import React from 'react'
import {Link} from 'react-router-dom'

export default function NoMatch() {
  return (
    <div> <br /> <br /> <br />
     <h2 style={{color:"red"}}>Nothing to see here </h2>
    <p> <Link  to='/' > Goto home page</Link></p>
    </div>
  )
}

