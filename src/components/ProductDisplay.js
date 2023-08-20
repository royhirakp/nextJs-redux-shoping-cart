"use client";
import React from "react";
import { data } from "@/utils/data";
import Image from "next/image";
import ProductRate from "./ProductRate";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const ProductDisplay = (props) => {
  const dispatch = useDispatch();

  const item = data.products.find((x) => {
    // console.log("find method", x.id, props.id);
    return x.id == props.id;
  });
  //   let result = arr.find((item)=>item.id===data.id)
  console.log(item);
  return (
    <div>
      product Display
      <Image
        src={item.image}
        //   src={"/images/photo1.jpg"}
        width={400}
        height={400}
        alt={item.name}
        className="rounded shadow object-cover h-96 w-full"
      />
      <h1>name :{item.name}</h1>
      <h1>price: Rs: {item.price}/-</h1>
      <ProductRate rate={4} count={55} />
      <button
        onClick={() => {
          dispatch(addToCart(item));
        }}
        style={{
          border: "1px solid #ffff",
          borderRadius: "5px",
          margin: "20px auto 2px 70px",
          padding: "5px",
          backgroundColor: "cadetblue",
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductDisplay;
