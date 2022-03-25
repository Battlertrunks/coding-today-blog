import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes["header-container"]}>
      <Link to="/">
        <h1>Type-a-Script</h1>
      </Link>

      <nav>
        <ul className={classes["nav-links"]}>
          <li>
            <Link to="/">Blogs</Link>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
