import React from "react";
import { Input } from "@repo/ui/components/input";
import { Search, SearchIcon } from "lucide-react";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center text-foreground border-b">
        <div className="h-full">
          <SearchIcon />
        </div>
        <Input placeholder="search..." className="border-none outline-none" />
      </div>
    </div>
  );
};

export default SearchBar;
