import React from 'react'

import {NavLink} from 'react-router-dom'
import { useAuth } from './auth';
export default function Navbar() {
  const auth = useAuth();
  return (
  <nav>
    <ul>
        <li><NavLink  to="/"  >Home</NavLink></li>
<li ><NavLink  to="/about"  >About</NavLink></li>
<li ><NavLink  to="/product"  >Product</NavLink></li>
<li ><NavLink  to="/users"  >users</NavLink></li>

<li ><NavLink  to="/profile"  >Profile</NavLink></li>


{
  !auth.user&&(
  <li ><NavLink  to="/login"  >Login</NavLink></li>
  )
  }

</ul>
  </nav>
  )
}
