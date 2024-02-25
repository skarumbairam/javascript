import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const NavBar = () => {
  const cartItem = useSelector((state) => state.cart.items.length);
  return (
    <div className="container">
      <div className="row">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/cart">Cart </Link> - {cartItem}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
