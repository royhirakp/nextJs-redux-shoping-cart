"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ProductRate from "./ProductRate";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
const ProductItems = ({ products }) => {
  // const [s, sets] = useState
  const [staaaa, setStaaa] = useState(0);
  const dispatch = useDispatch();
  return (
    <div className="card">
      <Link href={`/productDisplay/${products.id}`}>
        <Image
          src={products.image}
          //   src={"/images/photo1.jpg"}
          width={400}
          height={400}
          alt={products.name}
          className="rounded shadow object-cover h-96 w-full"
        />
      </Link>
      <Link href={`/productDisplay/${products.id}`}>
        <h1>name :{products.name}</h1>
        <h1>price: Rs: {products.price}/-</h1>
      </Link>

      <ProductRate rate={4} count={55} />
      <button
        onClick={() => {
          dispatch(addToCart(products));
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

export default ProductItems;
