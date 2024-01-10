import Cover from "../../Components/Cover"
import SectionTitle from "../../Components/SectionTitle";
import UseMenu from "../../Hooks/UseMenu"
import menuImg from '../../assets/menu/salad-bg.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = UseMenu();
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const dessert = menu.filter(item => item.category === 'dessert');
  const pizza = menu.filter(item => item.category === 'pizza');
  const offered = menu.filter(item => item.category === 'offered');

  return (
    <div>
      <Cover img= {menuImg} title='Our Menu'></Cover>
      <SectionTitle subHeading="Don't Miss" heading='Todays Offer'></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory title='desserts' coverImg={dessertImg} items={dessert}  ></MenuCategory>
      <MenuCategory title='salads' coverImg={saladImg} items={salad}  ></MenuCategory>
      <MenuCategory title='soup' coverImg={soupImg} items={soup}  ></MenuCategory>
      <MenuCategory title='pizza' coverImg={pizzaImg} items={pizza}  ></MenuCategory>
    </div>
  )
}

export default Menu