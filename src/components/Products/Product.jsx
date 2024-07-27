import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import Skeleton from "react-loading-skeleton";

const Product = () => {

    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
    }

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

    const Loading = () => {
        return(
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
            </>
        )
    }
    const ShowProduct = () => {
        return(
            <>
            <div className="lg:flex md:flex sm:flex inline gap-2">
            <div className="lg:w-[50%] w-[80%]">
                <img src={product.image} alt={product.title} className="w-[400px] h-[400px]" />
            </div>
            <div className="lg:w-[50%] w-[80%] ml-10 mt-5">
                <h4 className="uppercase text-gray-500 font-bold">
                    {product.category}
                </h4>
                <h1 className="text-2xl">{product.title}</h1>
                <p className="font-semibold flex">
                    Rating {product.rating && product.rating.rate}
                    <FaStar className="text-black-500 mt-1 ml-2" />
                </p>
                <h3 className="font-bold text-2xl my-4">
                    $ {product.price}
                </h3>
                <p className="text-gray-600">{product.description}</p>
                <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-4 rounded-md mr-2" onClick={()=>addProduct(product)}>Add to Cart</button>
                <NavLink to="/cart" className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-4 rounded-md">Go to Cart</NavLink>
            </div>
            </div>
            </>
        )
    }
  return (
    <div>
      <div className="container py-5">
        <div className="py-4">
            {loading ? <Loading/> : <ShowProduct/>}
        </div>
      </div>
    </div>
  )
}

export default Product
