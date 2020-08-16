import { auth } from './../../firebase/utils';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { setProducts, fetchProductsStart, addProductToCartStart } from './products.actions';
import { handleAddProduct, handleAddProductToCart, handleFetchProducts, handleDeleteProduct } from './products.helpers';
import productsTypes from './products.types';

export function* addProduct({ payload: {
  productCategory,
  productName,
  productThumbnail,
  productPrice,
  addedToCart
}}) {

  try {
    const timestamp = new Date();
    yield handleAddProduct({
      productCategory,
      productName,
      productThumbnail,
      productPrice,
      addedToCart,
      productAdminUserUID: auth.currentUser.uid,
      createdDate: timestamp
    });
    yield put(
      fetchProductsStart()
    );


  } catch (err) {
    // console.log(err);
  }

}

export function* onAddProductStart() {
  yield takeLatest(productsTypes.ADD_NEW_PRODUCT_START, addProduct);
}

export function* fetchProducts() {
  try {
    const products = yield handleFetchProducts();
    yield put(
      setProducts(products)
    );

  } catch (err) {
    // console.log(err);
  }
}

export function* onFetchProductsStart() {
  yield takeLatest(productsTypes.FETCH_PRODUCTS_START, fetchProducts);
}

export function* onAddProductToCartStart() {
  yield takeLatest(productsTypes.ADD_PRODUCT_TO_CART_START, addProductToCart);
}

export function* addProductToCart({ payload }) {
  try {
    yield handleAddProductToCart(payload);
    yield put (
      fetchProductsStart()
    );

  } catch (err) {
    // console.log(err);
  }
}

export function* deleteProduct({ payload }) {
  try {
    yield handleDeleteProduct(payload);
    yield put (
      fetchProductsStart()
    );

  } catch (err) {
    // console.log(err);
  }
}


export function* onDeleteProductStart() {
  yield takeLatest(productsTypes.DELETE_PRODUCT_START, deleteProduct);
}

export default function* productsSagas() {
  yield all([
    call(onAddProductStart),
    call(onAddProductToCartStart),
    call(onFetchProductsStart),
    call(onDeleteProductStart),
  ])
}