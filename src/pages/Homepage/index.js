import React from 'react'
import './styles.scss'
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import a from './a.png'
import b from './b.png'
import c from './c.png'
import d from './d.png'

const mapState = ({ productsData }) => ({
    products: productsData.products
});

export default function Homepage() {
    const { products } = useSelector(mapState);

    return (
        <section className="homepage">
            <h1>Featured Products</h1>
            {/* {products.map((product, index) => {
                const {
                    productCategory,
                    productName,
                    productThumbnail,
                    productPrice,
                    documentID
                } = product;

                return (
                    <Card key={index} style={{ width: '18rem' }} className='productCard'>
                        <Card.Img variant="top" src={productThumbnail} />
                        <Card.Body>
                            <Card.Title>{productName}</Card.Title>
                            <Card.Subtitle>{productPrice} BGN</Card.Subtitle>
                            <Card.Text>
                                {productCategory}
                            </Card.Text>
                            <Button variant="primary">View Details</Button>
                        </Card.Body>
                    </Card>
                )
            })} */}

            <Card style={{ width: '20rem' }} className='productCard'>
                <Card.Img variant="top" src={a} />
                <Card.Body>
                    <Card.Title>Phone</Card.Title>
                    <Card.Subtitle>Electronics</Card.Subtitle>
                    <Card.Text>
                        500 BGN
                    </Card.Text>
                    <Button variant="primary">View Details</Button>
                    <Button variant="secondary" className="addBtn">Add To Cart</Button>
                    </Card.Body>
            </Card>

            <Card style={{ width: '20rem' }} className='productCard'>
                <Card.Img variant="top" src={b} />
                <Card.Body>
                    <Card.Title>Car</Card.Title>
                    <Card.Subtitle>Vehicles</Card.Subtitle>
                    <Card.Text>
                        4500 BGN
                    </Card.Text>
                    
                    <Button variant="primary">View Details</Button>
                    <Button variant="secondary" className="addBtn">Add To Cart</Button>
                </Card.Body>
            </Card>

            <Card style={{ width: '20rem' }} className='productCard'>
                <Card.Img variant="top" src={c} />
                <Card.Body>
                    <Card.Title>Pantone Metallic</Card.Title>
                    <Card.Subtitle>Books</Card.Subtitle>
                    <Card.Text>
                        329 BGN
                    </Card.Text>
                    <Button variant="primary">View Details</Button>
                    <Button variant="secondary" className="addBtn">Add To Cart</Button>
                    </Card.Body>
            </Card>

            <Card style={{ width: '20rem' }} className='productCard'>
                <Card.Img variant="top" src={d} />
                <Card.Body>
                    <Card.Title>Laptop</Card.Title>
                    <Card.Subtitle>Electronics</Card.Subtitle>
                    <Card.Text>
                        1250 BGN
                    </Card.Text>
                    <Button variant="primary">View Details</Button>
                    <Button variant="secondary" className="addBtn">Add To Cart</Button>
                    </Card.Body>
            </Card>

            <Button className="seeAll">See all products
            </Button>
        </section>
    )
}
