import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
export default function Product() {
  return (
    <>
    <div>
      <h1> This is Product page</h1>
    </div>

<nav>
    <ul>
        <li>
<NavLink to="featured">Featured</NavLink></li>
<li><NavLink to="new">New</NavLink></li>
</ul>
</nav>
<Outlet/>
    </>
  )
}
