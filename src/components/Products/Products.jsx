import React from "react";
import Img1 from "../../assets/woman/woman1.png";
import Img2 from "../../assets/woman/woman2.jpg";
import Img3 from "../../assets/woman/woman3.jpg";
import Img4 from "../../assets/woman/woman4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    colour: "White",
    aosDelay: "0",

  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    colour: "Red",
    aosDelay: "200",

  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    colour: "Brown",
    aosDelay: "400",

  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    colour: "Yellow",
    aosDelay: "600",

  },
  {
    id: 5,
    img: Img2,
    title: "Fashion T-Shirt",
    rating: 4.5,
    colour: "Pink",
    aosDelay: "800",

  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">

        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px]  mx-auto">
            <p data-aos="fade-up" className='text-sm text-primary '>Top Selling Products for you</p>
            <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
            <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>

        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">

            {/* card section */}
            {ProductsData.map((data) => (
              <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.id}
              className="space-y-3">
                <img src={data.img} alt=""
                className="h-[220px] w-[150px] object-cover rounded-md"/>
                <div></div>
                <h1 className="font-semibold">{data.title}</h1>
                <p className="text-sm text-gray-600">{data.colour}</p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>{data.rating}</span>
                </div>
              </div>
            ))}
          </div>

          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-4 rounded-md">View All Button</button>
          </div>

        </div>
        
      </div>
    </div>
  );
};

export default Products
