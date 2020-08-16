import React from 'react'
import './styles.scss'
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCartStart } from './../../redux/Products/products.actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { firestore } from './../../firebase/utils';

const mapState = ({ productsData }) => ({
    products: productsData.products
});

export default function Product() {
    const { products } = useSelector(mapState);
    const { id } = useParams();
    const dispatch = useDispatch();
    
    const {
        productCategory,
        productName,
        productPrice,
        productThumbnail,
        documentID } = products.find(x => x.documentID === id)

    return (

        <section className="product">
            <h1>Details</h1>
            
            <Card style={{ width: '80rem', marginTop: '2.5rem', marginRight: '3.5rem' }} className='productCard'>
                        <Card.Img variant="top" src={productThumbnail} style={{height: "30rem", objectFit: "cover"}} />
                        <Card.Body>
                            <Card.Title>{productName}</Card.Title>
                            <Card.Subtitle>{productPrice} BGN</Card.Subtitle>
                            <Card.Text>
                                {productCategory}
                            </Card.Text>
                            <Button variant="secondary" onClick={() => dispatch(addProductToCartStart(documentID))}>Add to Cart</Button>
                            <Button variant="primary"><Link to={'products/' + documentID}>View Details</Link></Button>
                        </Card.Body>
                    </Card>

        </section>
    )
}
