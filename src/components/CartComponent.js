"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkOutCart,
  increaseItemQty,
  decreseItemQty,
  removeItems,
} from "../redux/slices/cartSlice";
const buttonStyle = {
  border: "1px solid #ffff",
  borderRadius: "5px",
  backgroundColor: "blue",
  margin: "0 5px 0 5px",
  height: "30px",
};

const CartComponent = () => {
  const dispatch = useDispatch();
  const reduxData = useSelector((s) => s?.cart);
  const data = reduxData?.cartItems || [];
  return (
    <div>
      <h1>Payment page:</h1>
      <br />
      <br />
      <div style={{ display: "flex", flexFlow: "column" }}>
        <h3>List of items: </h3>
        {data.map((item, i) => {
          //   console.log(item);
          return (
            <div
              style={{
                fontSize: 12,
                border: "1px solid #ffff",
                borderRadius: "4px",
                marginTop: "2px",
              }}
            >
              <p>itme Name : {item?.name}</p>
              <div style={{ display: "flex" }}>
                <button
                  style={buttonStyle}
                  onClick={() => dispatch(increaseItemQty(item.id))}
                >
                  Qty+
                </button>
                <p>item Qty : {item?.qtyOfOrder} </p>
                <button
                  onClick={() => dispatch(decreseItemQty(item.id))}
                  style={buttonStyle}
                >
                  Qty-
                </button>
                <button
                  onClick={() => dispatch(removeItems(item.id))}
                  style={buttonStyle}
                >
                  {" "}
                  Remove item
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <h3>TOTAL : {reduxData?.totalPrice}</h3>
      <button
        style={{
          border: "1px solid #ffff",
          borderRadius: "5px",
          margin: "20px auto 0 auto",
          backgroundColor: "red",
          padding: "6px",
        }}
        onClick={() => {
          dispatch(checkOutCart());
          alert("Go to the payment page ! api call for the payment");
        }}
      >
        Check out
      </button>
    </div>
  );
};

export default CartComponent;
