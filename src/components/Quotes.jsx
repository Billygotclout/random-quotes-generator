import React, { useState } from "react";

const Quotes = ({ quote }) => {
  return (
    <div className=" bg-white p-24 md:p-32 lg:mx-96 mx-3 text-[#FE8800] font-semibold text-3xl  ">
      <div className="space-y-4">
        <span className="md:mr-2 ">&#8220;</span>
        <span>{quote.content}</span>
        <span className="md:ml-2">&#8221;</span>

        <p className="text-right text-xl font-normal">
          <span>-</span>
          {quote.author}
        </p>
      </div>
    </div>
  );
};

export default Quotes;
