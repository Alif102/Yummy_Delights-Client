/* eslint-disable react/prop-types */

import UseAuth from "../Hooks/UseAuth";
import Swal from 'sweetalert2'
import {useLocation, useNavigate} from 'react-router-dom';
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/useCart";


const FoodCard = ({item}) => {
  
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
   const [,refetch] = useCart();

  const {user} = UseAuth();
    const {name, recipe, price,_id, image}=item;
    const handleAddToCart = () => {
      if(user && user.email) {
        console.log(user.email)
          const cartItem = {
            mebuId : _id,
            email: user.email,
            name, price,image

          }
          axiosSecure.post('/carts',cartItem)
          .then(res=> {
            console.log(res.data)
            if(res.data.insertedId){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${name} has been saved`,
                showConfirmButton: false,
                timer: 1500
              });
              refetch();
            }
          })
      }
      else{
        Swal.fire({
          title: "You are not login",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Log in"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login' , {state: {from:location}})
          }
        });

        
      }
    }


  return (
    <div>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src= {image} alt="Shoes" /></figure>
  <p>{price}</p>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button
      onClick={handleAddToCart}
       className="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default FoodCard