import "./App.css";
import Header from './component/Header';
import { useState, useEffect } from 'react';
import { url } from './common/constants';

function App() {
  
  const [products, setProducts] = useState([]);

  const [totalcategories, setTotalcategories] = useState([])

  const getProducts = async () => {
    const response = await fetch(url + "/shop");
    setProducts(await response.json());
  };

  const getTotalcategories = async (category) => {
    const response = await fetch(url + `/distinctCategory`)
      .then(response => response.json())
      .then(response => {
        setTotalcategories(response);
        console.log(response);
      });
  } 

  const priceAsc = async () => {
    const response = await fetch(url + "/orderByPriceAsc");
    setProducts(await response.json());
  }

  const priceDesc = async () => {
    const response = await fetch(url + "/orderByPriceDesc");
    setProducts(await response.json());
  }

  const RatingAsc = async () => {
    const response = await fetch(url + "/orderByRatingAsc");
    setProducts(await response.json());
  }

  const RatingDesc = async () => {
    const response = await fetch(url + "/orderByRatingDesc");
    setProducts(await response.json());
  }

  const FindByCategory = async (category) => {
    
    const response = await fetch(url + `/category/${category}`);
    setProducts(await response.json());
    console.log(category)
  }

  const FindByCategorySortByPriceAsc = async (category) => {
    
    const response = await fetch(url + `/findByCategoryOrderByPriceAsc/${category}`);
    setProducts(await response.json());
  }

  useEffect(() => {
    getProducts();
    getTotalcategories()
  }, []);


  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.productId);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.productId ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.productId);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.productId));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.productId ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  
  return (
    <div>
   
      <Header 
      cartItems={cartItems}
      onRemove={onRemove} 
      onAdd={onAdd}
      products={products}
      setProducts={setProducts}
      totalcategories={totalcategories}
      setTotalcategories={setTotalcategories}
      getProducts={getProducts}
      getTotalcategories={getTotalcategories}
      priceAsc={priceAsc}
      priceDesc={priceDesc}
      RatingAsc={RatingAsc}
      RatingDesc={RatingDesc}
      FindByCategory={FindByCategory}
      />
    </div>
  );
}

export default App;
