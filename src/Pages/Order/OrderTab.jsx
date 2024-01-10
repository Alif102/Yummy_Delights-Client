/* eslint-disable react/prop-types */
import FoodCard from "../../Components/FoodCard"

const OrderTab = ({items}) => {
  return (
    <div><div className="grid md: grid-cols-3 gap-9">
    {
      items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
    }
    </div></div>
  )
}

export default OrderTab