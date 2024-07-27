import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom';
import { addCart, delCart } from '../redux/action';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Cart = () => {
    const state = useSelector((state)=> state.handleCart)
    const dispatch = useDispatch()

    const handleAdd = (item) => {
        dispatch(addCart(item))
    }
    const handleDel = (item) => {
        dispatch(delCart(item))
    }

    const emptyCart = () => {
        return(
            <div className="px-4 my-5 py-5 font-semibold text-2xl">
                <div className="container py-4">
                    <div className="">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }
    const cartItems = (product) => {
        return(
            <>
                <div className="px-4 my-5 bg-gray-100 dark:bg-gray-900 rounded-3 py-5">
                <div className="container py-4">
                    <div className="justify-center flex">
                        <div className="">
                            <img src={product.image} alt={product.title} className='h-[200px] w-[180px]' />
                        </div>
                        <div className="w-[50%] ml-20">
                            <h3 className='font-semibold lg:text-2xl text-xl'>{product.title}</h3>
                            <p className="font-semibold lg:text-2xl">
                                {product.qty} X ${product.price} = ${product.qty * product.price}
                            </p>
                            <button className="btn btn-outline-dark me-4 mt-4" onClick={()=>handleDel(product)}>
                                <FaMinus />
                            </button>
                            <button className="btn btn-outline-dark me-4" onClick={()=> handleAdd(product)}>
                                <FaPlus />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )

    }
    const buttons = () => {
        return(
            <>
                <div className="container">
                    <div className="text-center">
                        <NavLink to="/checkout" className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-4 rounded-md">
                            Proceed to Checkout
                        </NavLink>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && buttons()}
        </div>
    );
}

export default Cart;