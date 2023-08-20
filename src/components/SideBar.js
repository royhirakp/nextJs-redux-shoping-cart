"use clint";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkOutCart, removeCartItems } from "../redux/slices/cartSlice";
import Link from "next/link";
const SideBar = () => {
  const dispatch = useDispatch();
  const reduxData = useSelector((s) => s?.cart);
  const data = reduxData?.cartItems || [];

  // console.log(reduxData);
  if (data.length === 0) {
    return <div>cart is empty</div>;
  }
  return (
    <div className="fixed top-0 right-0 w-32 h-full shadow-lg border-l border-l-gary-700 overflow-scroll">
      <div style={{ display: "flex", flexFlow: "column" }}>
        <h3>List of items: </h3>
        {data.map((item, i) => {
          return (
            <div
              style={{
                fontSize: 10,
                border: "1px solid #ffff",
                borderRadius: "4px",
                marginTop: "2px",
              }}
            >
              <p>itme Name : {item?.name}</p>
              <p>item Qty : {item?.qtyOfOrder}</p>
            </div>
          );
        })}
      </div>
      <h3>TOTAL : {reduxData?.totalPrice}</h3>
      <Link
        style={{
          border: "1px solid",
          padding: "5px",
          margin: "33px 10px 10px 10px",
          position: "relative",
          top: "19px",
          borderRadius: "6px",
          backgroundColor: "brown",
        }}
        href={"/checkout"}
      >
        Go to cart{" "}
      </Link>
      <br />
      <br />
      <br />
      <button onClick={() => dispatch(removeCartItems())}>remove all</button>
    </div>
  );
};

export default SideBar;
