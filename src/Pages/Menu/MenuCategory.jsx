/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import Cover from "../../Components/Cover"
import MenuItem from "../Shared/MenuItem/MenuItem"

const MenuCategory = ({items,title,coverImg}) => {
  return (
    <div>
      {title && <Cover img= {coverImg} title={title}></Cover>
}
        <div className="grid md:grid-cols-2 gap-8 mt-7">
            {
                items.map(item => <MenuItem key={item._id}
                item={item}
                ></MenuItem>)
            }
        </div>
       
        <Link  to= {`/order/${title}`}>
        <button className='btn btn-outline border-0 border-b-4 mt-3'>Order Now</button>
        </Link>
    </div>
  )
}

export default MenuCategory