"use client";
import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";

const App = ({ children }) => {
  return (
    <div>
      <div className="mr-32">
        <Header />
        <main className="p-4">{children}</main>
      </div>
      <SideBar />
    </div>
  );
};

export default App;
