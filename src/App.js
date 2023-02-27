import './App.css';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Ordersummary from './components/Ordersummary';
import Nopage from './components/Nopage';
import Product from './components/Product';
import Featured from './components/Featured';
import New from './components/New';
import Users from './components/Users';
import Userdetails from './components/Userdetails';
import Profile from './components/Profile';
import Login from './components/Login';
import { AuthProvider } from './components/auth';
import RequireAuth from './components/RequireAuth';
function App() {
  return (
    <div>
      
      <AuthProvider>
  <Navbar/>
  <Routes>
<Route  path="/"  element={<Home/>}></Route>
<Route  path="about"  element={<About/>}></Route>
<Route  path="ordersumm"  element={<Ordersummary/>}></Route>
<Route  path="profile"  element={<RequireAuth><Profile/></RequireAuth>}></Route>
<Route path="product"  element={<Product/>}>
<Route path="featured" element={<Featured/>}> </Route>
<Route path="new" element={<New/>}> </Route>

</Route>
<Route path="login" element={<Login/>}> </Route>
<Route path="users" element={<Users/>}> 
<Route path=":userid" element={<Userdetails/>}> </Route>

</Route>
<Route  path="*"  element={<Nopage/>}></Route>
  </Routes>
  </AuthProvider>
  </div>

  );
}




export default App;
