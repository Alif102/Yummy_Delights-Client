import { useState } from "react";
import Cover from "../../Components/Cover"
import orderImg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from "../../Hooks/UseMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router";
const Order = () => {
  const categories = [  'dessert','salad', 'soup','pizza'];
const {category} = useParams();
  const initialIndex = categories.indexOf(category)

    const [tabIndex,setTabIndex] = useState(initialIndex);
    const [menu] = UseMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');


    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    

  return (
    <div> 
        <Cover img={orderImg} title='Order Food'></Cover>
        <div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
    <TabList>
      <Tab>Dessert</Tab>
      <Tab>Salad</Tab>

      <Tab>Soup</Tab>
      <Tab>Pizza</Tab>

    </TabList>

  
    <TabPanel>
    <OrderTab items={dessert}/>
    </TabPanel>
    <TabPanel>
      <OrderTab items={salad}/>
    </TabPanel>
    <TabPanel>
    <OrderTab items={soup}/>
    </TabPanel>
    
    <TabPanel>
    <OrderTab items={pizza}/>
    </TabPanel>
    
   
    <TabPanel>
    <OrderTab items={drinks}/>
    </TabPanel>
  </Tabs>
        </div>

    </div>
  )
}

export default Order