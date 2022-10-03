import Header from "./Header";
import ProductCard from "./ProductCard";
function App() {

  const data = [
    {
      id: 1,
      name: "MacBook",
      price: 100000,
      bought: true,
     
      image: "http://intocode.ru/d/react-project-1/images/1.jpg"
  },
  {
      id: 2,
      name: "Galaxy",
      price: 35999,
      bought: false,
    
      image: "http://intocode.ru/d/react-project-1/images/2.jpg"
  },
  {
      id: 3,
      name: "Скутер",
      price: 65500,
      bought: false,
     
      image: "http://intocode.ru/d/react-project-1/images/3.jpg"
  },
  {
      id: 4,
      name: "Монитор Samsung",
      price: 12000,
      bought: true,
      
      image: "http://intocode.ru/d/react-project-1/images/4.jpg"
  },
  {
      id: 5,
      name: "Респираторная маска",
      price: 500,
      bought: true,
      
      image: "http://intocode.ru/d/react-project-1/images/5.jpg"
  },
  {
      id: 6,
      name: "Стиральная машина",
      price: 100000,
      bought: false,
      
      image: "http://intocode.ru/d/react-project-1/images/6.jpg"
  }
  
   ]
  return (
    <div className="bodi">
      <div className= "leftblock" > 
      <h5>Гаджеты и аксессуары</h5>
      <h5>Бытовая техника</h5>
      <h5>Прочее</h5>
      </div>
      <div className="bode"></div>
     
      <div className="main">
        <div className="left"> </div>
      { 
        data.map(item=>  <ProductCard item={item}/>)
      }
      </div>
      
    </div>
  );
}

export default App;
