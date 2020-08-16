import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const mapState = ({ user }) => ({
    cart: user.currentUser.cart
});

const Dashboard = props => {
    const { cart } = useSelector(mapState);
    
    return (
        <section className="products">
            <h1>You have added {Array.from(cart).length} items to your cart</h1>
            {Array.from(cart).length > 0 && cart.map((product, index) => {
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
                            <Button variant="primary"><Link to={'products/' + documentID}>View Details</Link></Button>
                        </Card.Body>
                    </Card>
                )
            })}

        </section>
    )
}

export default Dashboard;