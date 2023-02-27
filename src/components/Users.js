import React from 'react'
import {useSearchParams} from 'react-router-dom'
// import { Outlet } from 'react-router-dom'

export default function Users() {
  const [search ,setsearch]=useSearchParams();
  const showActiveUsers=search.get('filter')==='active';
  return (
    <>
    <div>
     <button className='btn btn-primary' type='button' onClick={()=>setsearch({filter:'active'}) }>Active Users</button> 
     <button className="b5"  onClick={()=>setsearch({}) }>Reset Users</button>
     {
showActiveUsers?<h2>THese are active users</h2>:<h2>all users</h2>
     }
    </div>
   {/*  <Outlet></Outlet>  */}
    </>
  )
}
