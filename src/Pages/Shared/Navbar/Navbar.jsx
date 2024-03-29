import { Link } from "react-router-dom"
import UseAuth from "../../../Hooks/UseAuth"
// import {FaShoppingCart} from 'react-icons';
import useCart from "../../../Hooks/useCart";
const Navbar = () => {
  const {user,LogOut } = UseAuth();
  const [cart] =useCart();
  
    const navOptions = <>
     <li><Link to='/' >Home</Link></li>
     <li><Link to='/menu' >Menu</Link></li>
     <li><Link to='/order/salad' >Order</Link></li>
     <li>
      <Link to='/'>
      {/* <button className="btn"><FaShoppingCart/></button> */}
      <div className="badge badge-secondary">+ {cart.length}</div></Link>
     </li>
     
        
         
    
    </>
        
    
  return (
    <>
<div className="navbar fixed opacity-30 z-10 bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {/* <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li> */}

      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
  {
      user ?
      <>
      <li onClick={LogOut} className="btn btn-ghost">Sign Out</li>
      </>
       : 
      <><li className="btn btn-neutral"><Link to='/login' >Login</Link></li>
      </>
     }
  </div>
</div>
    </>
  )
}

export default Navbar