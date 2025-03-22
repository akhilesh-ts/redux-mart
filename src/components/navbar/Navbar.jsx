import { navItems } from "@/utils/constants";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="w-full bg-blue-950 text-white p-8">
      <div className="flex items-center justify-between px-5">
        <Link to="/">
          <h1 className="font-extrabold text-3xl cursor-pointer">RM</h1>
        </Link>

        <div>
          <ul className="flex items-center gap-6 text-lg cursor-pointer font-thin">
            {navItems.map((nav) => (
              <Link key={nav?.id} to={nav?.path}>
                <li>{nav?.name}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
