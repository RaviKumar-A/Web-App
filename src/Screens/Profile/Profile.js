import React from 'react'
import { Link } from 'react-router-dom'

export default function Profile() {
  return (
    <div>
        <h1>Profile Page</h1>
        <Link to="/createproject"><button>click here to Dashboard Page</button> </Link>

    </div>
  )
}
