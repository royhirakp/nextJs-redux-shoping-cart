"use client";

import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ProductRate = ({ rate, count }) => {
  return (
    <div className="flex">
      <Rating style={{ maxWidth: 250 }} value={rate} readOnly />
      {count} reviews
    </div>
  );
};

export default ProductRate;
