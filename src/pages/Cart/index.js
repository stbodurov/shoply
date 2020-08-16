import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductStart, fetchProductsStart, deleteProductStart } from './../../redux/Products/products.actions';
import {getCurrentUser} from './../../firebase/utils';

import AddModal from './../../components/Modal';
import FormInput from './../../components/forms/FormInput';
import FormSelect from './../../components/forms/FormSelect';
import Button from './../../components/forms/Button';
import './styles.scss';

const mapState = ({ productsData }) => ({
    products: productsData.products
  });

const Cart = props => {
    const { products } = useSelector(mapState);
    const dispatch = useDispatch();
    const [hideModal, setHideModal] = useState(true);
    const [productCategory, setProductCategory] = useState('Vehicles');
    const [productName, setProductName] = useState('');
    const [productThumbnail, setProductThumbnail] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const currentUser = getCurrentUser();
    console.log(currentUser);

    useEffect(() => {
        dispatch(
            fetchProductsStart()
        );

    }, [dispatch]);

    return (
        <>

            <div className="manageProducts">

                <table border="0" cellPadding="0" cellSpacing="0">
                    <tbody>
                        <tr>
                            <th>
                                <h1>
                                     Shopping Bag
        </h1>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <table className="results" border="0" cellPadding="10" cellSpacing="0">
                                    <tbody>
                                        {products.filter((product) => product.addedToCart === currentUser.id).map((product, index) => {
                                            const {
                                                productName,
                                                productThumbnail,
                                                productPrice,
                                                documentID
                                            } = product;

                                            return (
                                                <tr key={index}>
                                                    <td>
                                                        <img className="thumb" src={productThumbnail} alt="product Thumbnail" />
                                                    </td>
                                                    <td>
                                                        {productName}
                                                    </td>
                                                    <td>
                                                        {productPrice} BGN
                  </td>
                                                    <td>
                                                        <Button onClick={() => dispatch(deleteProductStart(documentID))}>
                                                            Remove
                    </Button>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </>
    )
}

export default Cart;