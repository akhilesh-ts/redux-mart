import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useCategories from "@/hook/useCategories";
import { setSelectedCategory } from "@/utils/slice/categoriesSlice";
import { setSearchVal } from "@/utils/slice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../error/ErrorMessage";

const Category = () => {
  const { loading, error } = useCategories();
  const dispatch = useDispatch();
  const categories = useSelector((state) => state?.categories?.categories);
  const selectedCategory = useSelector(
    (state) => state?.categories?.selectedCategory
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <ErrorMessage error={error}/>
  }

  const handelValue=(value)=>{

    dispatch(setSelectedCategory(value))
    dispatch(setSearchVal(""))
  }
  return (
    <>
      <Select
        value={selectedCategory}
        onValueChange={(value) => handelValue(value)}
      >
        <SelectTrigger className="w-full md:w-[180px]">
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
    </>
  );
};

export default Category;
