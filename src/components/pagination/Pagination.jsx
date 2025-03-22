import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  setCurrentPage,
  setProductsPerPage,
} from "@/utils/slice/paginationSlice";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

const Pagination = () => {
  const dispatch = useDispatch();
  const productsPerPage = useSelector(
    (state) => state?.pagination?.productsPerPage
  );
  const currentPage = useSelector((state) => state?.pagination?.currentPage);

  const products = useSelector((state) => state?.product?.products);
  const totalPage = Math.ceil(products?.length / productsPerPage);
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={() => dispatch(setCurrentPage(currentPage - 1))}
          disabled={currentPage === 1}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={() => dispatch(setCurrentPage(currentPage + 1))}
          disabled={currentPage === totalPage}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-around">
        <div className="hidden lg:block">
          <p className=" text-sm text-gray-700 flex items-center gap-4">
            Showing
            <span className="font-medium">{currentPage}</span>
            {/* page <span className="font-medium">{productsPerPage}</span> */}
            page
            out of
            <span className="font-medium">{totalPage}</span>
            pages
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-xs">
            <button
              onClick={() => dispatch(setCurrentPage(currentPage - 1))}
              disabled={currentPage === 1}
              className={`relative inline-flex items-center rounded-l-md px-3 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset 
      ${
        currentPage === 1
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-gray-50 cursor-pointer"
      }`}
            >
              <ChevronLeft />
            </button>

            <div className="hidden sm:flex">
              {[...Array(totalPage)].map((_, i) => (
                <button
                  key={i}
                  className={`border px-3 ml-2 mr-2 border-gray-300 rounded-md 
          ${
            currentPage === i + 1
              ? "bg-blue-600 text-white"
              : "hover:bg-gray-200"
          }`}
                  onClick={() => dispatch(setCurrentPage(i + 1))}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            {/* <div className="sm:hidden flex items-center text-sm px-3">
              Page {currentPage} of {totalPage}
            </div> */}

            <button
              onClick={() => dispatch(setCurrentPage(currentPage + 1))}
              disabled={currentPage === totalPage}
              className={`relative inline-flex items-center rounded-r-md px-3 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset 
      ${
        currentPage === totalPage
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-gray-50 cursor-pointer"
      }`}
            >
              <ChevronRight />
            </button>
          </nav>
        </div>
        <Select
          value={String(productsPerPage)}
          onValueChange={(value) => dispatch(setProductsPerPage(Number(value)))}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Products Per Page" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="bg-white">
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="15">15</SelectItem>
              <SelectItem value="20">20</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Pagination;
