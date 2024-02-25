import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../features/cartSlice";

const Products = () => {
  const [products, setProducts] = useState([]);
  const cartItem = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const { add } = cartAction;
  const addToCart = (product) => {
    dispatch(add(product));
  };

  useEffect(() => {
    console.log("cartItem", cartItem);
  }, [cartItem]);

  const getDataFetch = async () => {
    try {
      const data = await fetch("https://fakestoreapi.com/products");
      const dataJson = await data.json();
      setProducts([...dataJson]);
    } catch (error) {
      console.log("Error", error);
    }
  };

  const getDataAxios = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const data = response.data;
    } catch (error) {
      console.log("Axios Data", error.message);
    }
  };

  useEffect(() => {
    getDataFetch();
    // getDataAxios();
  }, []);

  return (
    <div>
      <h2>Products Details</h2>
      <p>product length {products.length}</p>
      <div className="container">
        <div className="row">
          {products.map((productCard, index) => {
            return (
              <div className="col-md-3" style={{ maring: "20px" }}>
                <Card style={{ width: "16rem", height: "20rem" }}>
                  <div
                    className="text-center"
                    style={{
                      width: "100px",
                      height: "100px",
                      margin: "10px auto",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      style={{ width: "auto", height: "100%" }}
                      src={productCard.image}
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>{productCard.title}</Card.Title>
                    <Card.Text>{productCard.category}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button
                      variant="primary"
                      onClick={() => addToCart(productCard)}
                    >
                      Add to Cart
                    </Button>
                  </Card.Footer>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
