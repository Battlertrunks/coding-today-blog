import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes["header-container"]}>
      <h1>Type-a-Script</h1>
      <nav>
        <ul className={classes["nav-links"]}>
          <li>
            <a href="#">Blogs</a>
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
