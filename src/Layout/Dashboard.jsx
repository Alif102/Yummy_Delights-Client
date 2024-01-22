
import {NavLink} from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
    <div className="w-64 min-h-screen bg-orange-300">
        <ul className="menu">
            <li>
                <NavLink to='/dashboard/cart' >My Cart</NavLink>
            </li>
        </ul>

    </div>
    </div>
  )
}

export default Dashboard