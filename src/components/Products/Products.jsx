import React, {useState, useEffect} from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink } from "react-router-dom";



const Products = () => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let  componentMounted = true;
  
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if(componentMounted){
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter)
      }
      return () => {
        componentMounted = false;
      }
    }

    getProducts();
  }, []);

  const Loading = () => {
    return(
      <>
        <div className="grid grid-cols-3">
          <Skeleton className="h-[350px]" />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x)=>x.category === cat);
    setFilter(updatedList);
  }
  const ShowProducts = () => {
    return (
      <>
        <div className="lg:gap-3 flex justify-center mb-2 pb-2 gap-1">
          <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-4 rounded-md" onClick={()=>setFilter(data)}>All</button>
          <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-4 rounded-md hidden" onClick={()=>filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-4 rounded-md" onClick={()=>filterProduct("women's clothing")}>Women's Clothing</button>
          <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-4 rounded-md" onClick={()=>filterProduct("jewelery")}>Jewelery</button>
          <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-4 rounded-md" onClick={()=>filterProduct("electronics")}>Electronic</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 place-items-center gap-5">
        {filter.map((product) => {
          return(
            <>
              <div className="mb-10">
                <div className="text-center pt-4" key={product.id}>
                  <img src={product.image} className="h-[150px] object-cover rounded-md" alt={product.title} height="250px"/>
                  <div className="card-body">
                    <h5 className="font-semibold">{product.title.substring(0,12)}...</h5>
                    <p className="text-sm mb-1">${product.price}</p>
                    <NavLink to={`/products/${product.id}`} className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-4 rounded-md">Buy Now</NavLink>
                  </div>
                </div>
              </div>
            </>
          )
        })}
        </div>
      </>
    )
    
  }

  return (
    <div>
      <div className="container my-5 py-5">
        
      <div className="text-center mb-10 mt-11 max-w-[600px]  mx-auto">
            <p data-aos="fade-up" className='txt-sm text-primary '>Top Selling Products for you</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="justify-center">
          {loading ? <Loading/>: <ShowProducts/>}
        </div>
      </div>
    </div>
  );
};

export default Products
