import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const DropDownBannerSelect = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Change Background</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56"></DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownBannerSelect;
