import { firestore, getCurrentUser } from './../../firebase/utils';

export const handleAddProduct = product => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('products')
      .doc()
      .set(product)
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      })
  });
}

export const handleFetchProducts = () => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('products')
      .get()
      .then(snapshot => {
        const productsArray = snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            documentID: doc.id
          }
        });
        resolve(productsArray);
      })
      .catch(err => {
        reject(err);
      })
  })
}

export const handleAddProductToCart = documentID => {
  console.log(documentID, 1)
  return new Promise((resolve, reject) => {
    const user = getCurrentUser();
    const userID = user.documentID;
    firestore
      .collection('products')
      .doc(documentID)
      .update({
        addedToCart: userID
    })
      .then(() => {
        console.log(userID);
        console.log(documentID, 2)
        resolve();
      })
      .catch(err => {
        reject(err);
      })
  });
}

export const handleDeleteProduct = documentID => {
  console.log(documentID, 1)
  return new Promise((resolve, reject) => {
  
    firestore
      .collection('products')
      .doc(documentID)
      .delete()
      .then(() => {
        console.log(documentID, 2)
        resolve();
      })
      .catch(err => {
        reject(err);
      })
  });
}