import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const ErrorMessage = ({ error }) => {
    const navigate=useNavigate()
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-red-100 rounded-lg">
      <AlertCircle className="text-red-600 w-12 h-12" />
      <h2 className="text-red-600 font-bold text-lg mt-2">
        Something went wrong
      </h2>
      <p className="text-gray-700 mt-1">
        {error?.message || "An unexpected error occurred."}
      </p>

      <Button
        className="mt-3 bg-red-600 text-white px-6 py-2"
        onClick={() => navigate("/")} 
      >
        Go to Home
      </Button>
    </div>
  );
};

export default ErrorMessage;
