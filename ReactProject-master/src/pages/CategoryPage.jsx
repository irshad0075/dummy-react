import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${categoryName}`).then(json => setProducts(json.data.products));
  }, [categoryName]);

  return (
    <div className="container">
      <div className="my-6 text-center text-white">
        <h1>{categoryName.toUpperCase()}</h1>
        <p className="text-white">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, officia nihil! Nemo sunt reprehenderit voluptates amet itaque libero in unde, molestias illo veniam, dolore veritatis eaque ipsum. Molestiae, nam architecto!
        </p>
      </div>

      <div className="row">
        {products.map((val, key) => (
          <div className="col-md-4 my-4" key={key}>
            <Link className="text-decoration-none text-danger" to={`/products/${val.id}`}>
              <Card className="h-100 d-flex flex-column">
                <Card.Img variant="top" src={val.thumbnail} className="flex-grow-1" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{val.title}</Card.Title>
                  <Card.Text>{val.description}</Card.Text>
                  <div className="mt-auto">
                    <div className="text-danger fw-bold">₹ {val.price}</div>
                    <button className="btn btn-danger">Add to Cart</button>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
