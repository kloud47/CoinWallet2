import React from "react";
import { Input } from "@repo/ui/components/input";
import { Search } from "lucide-react";

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <div className="flex items-center">
      <div className="search text-foreground">
        <input
          type="search"
          placeholder="Search here ..."
          className="input outline-none bg-background"
        />
        <Search className="fa fa-search" />
      </div>
    </div>
  );
};

export default SearchBar;
