import React from 'react'
import { useParams } from 'react-router-dom'
export default function Userdetails() {
   const x= useParams();
   const userid=x.userid;
  return (
    <div>
      <h3>User Details:{userid}</h3>
    </div>
  )
}
