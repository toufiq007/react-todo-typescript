import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link style={{ marginLeft: "20px" }} to="/">
        All
      </Link>
      <Link style={{ marginLeft: "20px" }} to="/?todos=active">
        Active
      </Link>
      <Link style={{ marginLeft: "20px" }} to="/?todos=complete">
        Complete
      </Link>
    </nav>
  );
};

export default Navbar;
