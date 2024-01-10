/* eslint-disable react/prop-types */

const MenuItem = ({item}) => {
    const {name, recipe, price, image} = item;
  return (
    <div className="flex space-x-3 gap-3">
        <img style={{borderRadius: '0 150px 150px 150px'}} className="w-[110px]" src={image} alt="img" />

        <div>
            <h3 className=" uppercase">{name}-----</h3>
            <p>{recipe}</p>
        </div>
        <p className=" text-yellow-500">{price}</p>

    </div>
  )
}

export default MenuItem