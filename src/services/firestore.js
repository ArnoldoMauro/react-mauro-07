//------------------Firebase-------------------------------------
import { initializeApp } from "firebase/app";
import { getFirestore,collection, getDocs, doc, getDoc, query, where} from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5VEVaW1g1-fnzuvNdopSZi8Xjrn9W9MM",
  authDomain: "react-abr2023.firebaseapp.com",
  projectId: "react-abr2023",
  storageBucket: "react-abr2023.appspot.com",
  messagingSenderId: "507845408787",
  appId: "1:507845408787:web:bd7191e2766e796250e7e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//--------------------------------------------------------------

export async function getItems(){
  // traer todos los productos de una coleccion -> "products"
  //1. crear la referencia a la coleccion deseada
  const productsRef = collection(db, "products");
  //2- pedir los documentos de dicha coleccion
  const productsSnap = await getDocs(productsRef);
  const documents = productsSnap.docs;

  //3- extraer los datos (.data()) de los documentos utilizando map()
  const docsData = documents.map((doc) => {
    return {id: doc.id, ...doc.data()};
  });

  return docsData;
}

export async function getSingleItem(idURL){
    //referencia
    const docRef = doc(db, "products", idURL);
    //snapshot
    const docSnap = await getDoc(docRef);
    return { id: docSnap.id, ...docSnap.data()};
}

// funcion que filtra por categorias --- 
export async function getItemsByCategory(categoryURL) {
  const productsRef = collection(db, "products");
  //crear una consulta a productsRef cuando la categoria sea la buscada
  const q = query(productsRef, where("category", "==", categoryid));

  const productsSnap = await getDocs(q);
  const documents = productsSnap.docs;
  const docsData = documents.map((doc) => {
    return {id: doc.id, ...doc.data()};
  });
  return docsData;
}