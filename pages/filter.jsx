import Category from "@/components/Home/Category";
import Filter from "@/components/Home/Filter";
import Navbar from "@/components/common/Navbar";
import React from "react";

const filter = () => {
  return (
    <div>
      <Navbar />
      {/* <Category/> */}
      <Filter />
    </div>
  );
};

export default filter;
