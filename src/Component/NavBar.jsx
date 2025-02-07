import React from 'react'
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <div>
        <nav>
            <ul>
                <ol><Link to="/">Home</Link></ol>
                <ol><Link to="/about">About</Link></ol>
                <ol><Link to="/contact">Contact</Link></ol>
                <ol><Link to="/users">Users</Link></ol>
                <ol><Link to="/blog">Blog</Link></ol>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar