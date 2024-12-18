import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div
        className="
          w-12 h-12 
          border-4 border-zinc-700 border-t-zinc-200 
          rounded-full 
          animate-spin
        "
      />
    </div>
  );
};

export default Loading;
