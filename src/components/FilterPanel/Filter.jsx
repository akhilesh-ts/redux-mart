// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
//   DialogClose,
// } from "@/components/ui/dialog";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { setSelectedCategory } from "@/utils/slice/categoriesSlice";
// import {
//   resetFilter,
//   setMaxPrice,
//   setMinPrice,
//   setRating,
// } from "@/utils/slice/filterSlice";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// const Filter = () => {
//   const dispatch = useDispatch();
//   const categories = useSelector((state) => state?.categories?.categories);
//   const selectedCategory = useSelector(
//     (state) => state?.categories?.selectedCategory
//   );

//   const { minPrice, maxPrice, rating } = useSelector((state) => state?.filters);

//   const [tempMinPrice, setTempMinPrice] = useState(minPrice);
//   const [tempMaxPrice, setTempMaxPrice] = useState(maxPrice);
//   const [tempRating, setTempRating] = useState(rating);
//   const [tempCategory, setTempCategory] = useState(selectedCategory);

//   const handelClearFilter=()=>{
//     dispatch(resetFilter())
//     dispatch(setSelectedCategory("all"))
//   }
//   const applyFilters = () => {
//     dispatch(setSelectedCategory(tempCategory));
//     dispatch(setMinPrice(tempMinPrice));
//     dispatch(setMaxPrice(tempMaxPrice));
//     dispatch(setRating(tempRating));
//   };

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button variant="outline">Filter</Button>
//       </DialogTrigger>
//       <DialogContent className="bg-white w-full max-w-[90%] sm:max-w-[425px]">
//         <DialogHeader>
//           <DialogTitle className="text-center">Filter Products</DialogTitle>
//           <DialogDescription className="text-center">
//             Refine your search
//           </DialogDescription>
//         </DialogHeader>

//         <div className="grid gap-4 py-4">
//         <Select value={tempCategory} onValueChange={setTempCategory}>
//             <SelectTrigger className="w-full">
//               <SelectValue placeholder="Category" />
//             </SelectTrigger>
//             <SelectContent className="bg-gray-100">
//               <SelectGroup>
//                 <SelectLabel>Category</SelectLabel>
//                 <SelectItem value="all">All</SelectItem>
//                 {categories?.map((category, index) => (
//                   <SelectItem key={index} value={category}>
//                     {category}
//                   </SelectItem>
//                 ))}
//               </SelectGroup>
//             </SelectContent>
//           </Select>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//             <div>
//               <label className="text-sm font-medium">Min Price</label>
//               <input
//                 type="number"
//                 name="minPrice"
//                 value={tempMinPrice}
//                 onChange={(e) => setTempMinPrice(e.target.value)}
//                 className="w-full p-2 border rounded"
//                 placeholder="Min"
//               />
//             </div>
//             <div>
//               <label className="text-sm font-medium">Max Price</label>
//               <input
//                 type="number"
//                 name="maxPrice"
//                 value={tempMaxPrice}
//                 onChange={(e) => setTempMaxPrice(e.target.value)}
//                 className="w-full p-2 border rounded"
//                 placeholder="Max"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="text-sm font-medium">Rating</label>
//             <div className="flex flex-wrap gap-2">
//               {["1", "2", "3", "4", "5"].map((star) => (
//                 <label key={star} className="flex items-center gap-3">
//                   <input
//                     type="radio"
//                     name="rating"
//                     value={star}
//                     checked={rating === star}
//                     onChange={(e) => setTempRating(e.target.value)}
//                   />
//                   {star} ⭐
//                 </label>
//               ))}
//             </div>
//           </div>
//         </div>

//         <DialogFooter className="flex flex-col sm:flex-row justify-between gap-2">
//           <DialogClose asChild>
//           <Button
//             variant="secondary"
//             className="w-full sm:w-auto  bg-gray-400 text-white font-normal"
//             onClick={handelClearFilter}
//           >
//             Clear
//           </Button>
//           </DialogClose>

//           <DialogClose asChild>
//             <Button
//               type="submit"
//               variant="secondary"
//               className="w-full sm:w-auto  bg-blue-900 text-white font-normal"
//               onClick={applyFilters}
//             >
//               Apply Filters
//             </Button>
//           </DialogClose>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default Filter;
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setSelectedCategory } from "@/utils/slice/categoriesSlice";
import {
  resetFilter,
  setMaxPrice,
  setMinPrice,
  setRating,
} from "@/utils/slice/filterSlice";
import { setSearchVal } from "@/utils/slice/productSlice";

const Filter = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state?.categories?.categories);
  const selectedCategory = useSelector(
    (state) => state?.categories?.selectedCategory
  );
  const { minPrice, maxPrice, rating } = useSelector((state) => state?.filters);

  const [tempCategory, setTempCategory] = useState(selectedCategory);
  const [tempMinPrice, setTempMinPrice] = useState(minPrice);
  const [tempMaxPrice, setTempMaxPrice] = useState(maxPrice);
  const [tempRating, setTempRating] = useState(rating);

  const applyFilters = () => {
    dispatch(setSelectedCategory(tempCategory));
    dispatch(setMinPrice(tempMinPrice));
    dispatch(setMaxPrice(tempMaxPrice));
    dispatch(setRating(tempRating));
  };

  const handleClearFilter = () => {
    setTempCategory("all");
    setTempMinPrice("");
    setTempMaxPrice("");
    setTempRating("");
    dispatch(resetFilter());
    dispatch(setSelectedCategory("all"));
    dispatch(setSearchVal(""));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Filter</Button>
      </DialogTrigger>
      <DialogContent className="bg-white w-full max-w-[90%] sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Filter Products</DialogTitle>
          <DialogDescription className="text-center">
            Refine your search
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <Select value={tempCategory} onValueChange={setTempCategory}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="bg-gray-100">
              <SelectGroup>
                <SelectLabel>Category</SelectLabel>
                <SelectItem value="all">All</SelectItem>
                {categories?.map((category, index) => (
                  <SelectItem key={index} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <label className="text-sm font-medium">Min Price</label>
              <input
                type="number"
                value={tempMinPrice}
                onChange={(e) => setTempMinPrice(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Min"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Max Price</label>
              <input
                type="number"
                value={tempMaxPrice}
                onChange={(e) => setTempMaxPrice(e.target.value)}
                className="w-full p-2 border rounded"
                placeholder="Max"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Rating</label>
            <div className="flex flex-wrap gap-2">
              {["1", "2", "3", "4", "5"].map((star) => (
                <label key={star} className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="rating"
                    value={star}
                    checked={tempRating === star}
                    onChange={() => setTempRating(star)}
                  />
                  {star} ⭐
                </label>
              ))}
            </div>
          </div>
        </div>

        <DialogFooter className="flex flex-col sm:flex-row justify-between gap-2">
          <DialogClose asChild>
            <Button
              variant="secondary"
              className="w-full sm:w-auto bg-gray-400 text-white font-normal"
              onClick={handleClearFilter}
            >
              Clear
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button
              type="submit"
              variant="secondary"
              className="w-full sm:w-auto bg-blue-900 text-white font-normal"
              onClick={applyFilters}
            >
              Apply Filters
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Filter;
