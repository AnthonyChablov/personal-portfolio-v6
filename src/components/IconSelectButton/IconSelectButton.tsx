import React from "react";
import { Button } from "@/components/ui/button";

const IconButton = () => {
  return (
    <div className="relative z-30">
      <Button
        className="rounded-2xl bg-transparent outline-none hover:bg-zinc-900/40
      border-none text-7xl h-fit px-0 py-5 flex items-center justify-center transition-all duration-300"
        variant="outline"
      >
        👻
      </Button>
    </div>
  );
};

export default IconButton;
