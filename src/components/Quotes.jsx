import React, { useState } from "react";

const Quotes = ({ quote }) => {
  return (
    <div className=" bg-white p-32 mx-20 lg:mx-96 text-[#FE8800] font-semibold text-3xl ">
      <div className="space-y-4">
        <span className="mr-2 ">&#8220;</span>
        <span>{quote.content}</span>
        <span className="ml-2">&#8221;</span>

        <p className="text-right text-xl font-normal">
          <span>-</span>
          {quote.author}
        </p>
      </div>
    </div>
  );
};

export default Quotes;
