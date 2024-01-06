import { useEffect, useState } from "react";
import "./App.css";

function Load_more_data() {
  const [loading, setloding] = useState(false);
  const [products, setproducts] = useState([]);
  const [count, setcount] = useState(0);
  const [disablebutton, setdissablebutton] = useState(false);
  const fetchproducts = async () => {
    try {
      setloding(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setproducts((prevData) => [...prevData, ...result.products]);
        setloding(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchproducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) setdissablebutton(true);
  }, [products]);
  if (loading) {
    return <div>Loading Data ! please wait .</div>;
  }
  return (
    <>
      <div className="load-more-container">
        <div className="product-container">
          {products && products.length
            ? products.map((item) => {
                return (
                  <div className="product" key={item.id}>
                    <img src={item.thumbnail} alt={item.title} />
                    <p>{item.title}</p>
                  </div>
                );
              })
            : null}
        </div>
        <div className="button-container">
          <button disabled={disablebutton} onClick={() => setcount(count + 1)}>
            Load More Products
          </button>
          {disablebutton ? <p>you have reached to 100 products </p> : null}
        </div>
      </div>
    </>
  );
}
export default Load_more_data;
