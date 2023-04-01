"use client";
import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h2>error! something went wrong!</h2>
      <button className="hover:text-amber-600 dark:bg-black rounded-lg p-4" onClick={() => reset()}>
        reset
      </button>
    </div>
  );
};

export default Error;
