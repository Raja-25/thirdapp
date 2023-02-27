import React from 'react'
import {useNavigate} from 'react-router-dom'
 
export default function Ordersummary() {
    const navigate = useNavigate();
  return (
    <div>
      <h1> Your order is confirmed!</h1>

      <button onClick={() => navigate("/")} > HOME</button>
    </div>
  )
}
