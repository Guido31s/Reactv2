import React from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "../ItemCount/ItemCount";
import {Link} from "react-router-dom"
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";

const ItemDetail = ({ data }) => {

  const [cart, setCart] = useState(0)
  const { addToCart} = useCartContext()
  
  const onAdd = (quantity) => {
    setCart((addToCart (data, quantity)), cart);
  }
  
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.image} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>Precio: ${data.price}</Card.Text>
          <Card.Text>{data.category}</Card.Text>
          <Card.Text>{data.description}</Card.Text>
        </Card.Body>
        <div style={{display: "inline"}}>
       <ItemCount
          initial="1"
          stock="10"
          onAdd={onAdd}
        />
        <Link to="/cart">
          <button className="btn btn-outline-secondary rounded-0 mt-1">Comprar</button>
        </Link>
        </div>
      </Card>
    );
  };
  
  export default ItemDetail;