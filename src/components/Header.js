import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const items = useSelector((s) => s.cart.cartItems);
  //   console.log(items, "items========");
  return (
    <header>
      <nav className="flex justify-between items-center h-12 px-4 shadow-md bg-gray-800 text-white">
        <Link href="/" className="text-lg font-bold">
          Next js - Redux - cart app
        </Link>

        <div>
          <span>No of product: {items.length}</span>
          <br />
          <Link href="/checkout"> go to Cart</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
