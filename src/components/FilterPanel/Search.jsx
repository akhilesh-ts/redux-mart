import { setSearchVal } from "@/utils/slice/productSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../ui/button";
import { SearchCheck } from "lucide-react";

const Search = () => {
  const [inpVal, setInpVal] = useState("");
  const dispatch = useDispatch();
  // const searchVal = useSelector((state) => state?.product?.searchVal);

  return (
    <div className=" w-full  md:w-1/3 flex items-center gap-3">
      <input
        type="search"
        value={inpVal}
        onChange={(e) => setInpVal(e.target.value)}
        className=" border-1 w-full p-2 rounded-xl text-gray-500"
        placeholder="Search Products.."
      />
      <Button
        type="submit"
        onClick={() => dispatch(setSearchVal(inpVal))}
        className="bg-blue-950 text-white cursor-pointer"
      >
        <SearchCheck />
      </Button>
    </div>
  );
};

export default Search;
