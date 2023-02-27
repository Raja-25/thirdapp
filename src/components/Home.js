import React from 'react'
import {useNavigate} from 'react-router-dom'
export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1> This Home Page</h1>
<button onClick={() => navigate('ordersumm')} > Book</button>


    </div>
  )
}
