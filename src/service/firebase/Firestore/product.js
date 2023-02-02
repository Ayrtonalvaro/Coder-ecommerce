import { getDocs, collection, query, where } from "firebase/firestore";
import { modelProductFromFirestore } from "../../../Model/ProductMode";
import { db } from "../firebaseConfig";
export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((res) => {
        const products = res.docs.map((doc) => {
          return modelProductFromFirestore(doc)
        });
        resolve(products);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
