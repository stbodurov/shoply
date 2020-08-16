import React, { useEffect } from 'react';
import './styles.scss'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsStart, addProductToCartStart } from './../../redux/Products/products.actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const mapState = ({ productsData }) => ({
    products: productsData.products
});

export default function Products() {
    const { products } = useSelector(mapState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            fetchProductsStart()
        );

    }, [dispatch]);

    return (
        <section className="products">
            <h1>All Products</h1>
            {Array.from((products).filter(x => x.addedToCart !== true)).length > 0 && products.filter(x => x.addedToCart !== true).slice(0, 4).map((product, index) => {
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
                            <Button variant="secondary" onClick={() => dispatch(addProductToCartStart(documentID))}>Add to Cart</Button>
                            <Button variant="primary"><Link to={'products/' + documentID}>View Details</Link></Button>
                        </Card.Body>
                    </Card>
                )
            })}

            {Array.from((products).filter(x => x.addedToCart !== true)).length === 0 && (
                <h2 style={{ marginLeft: '15rem' }} >There are no products. You can add one from the merchant tab.</h2>
                )}

        </section>
    )
}
