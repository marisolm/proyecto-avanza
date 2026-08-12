import db from "./db.js";
import { addDoc, collection } from "firebase/firestore";

const products = [
    {
        id: 1,
        name: "Computadora 1",
        description: "Descripción de computadora 1",
        stock: 1,
        images: ['/image/computadora1.jpg'],
        price: 150000,
        category: 'Computadoras'
    },
    {
        id: 2,
        name: "Smartphone 1",
        description: "Descripción de smartphone 1",
        stock: 1,
        images: ['/image/smartphone1.jpg'],
        price: 50000,
        category: 'Smartphones'
    },
];

const seedProducts = async () => {
    try {
        const productsRef = collection(db, 'products');

        for (const product of products) {
            const { id, ...productData } = product; // Extraer el id del producto
            await addDoc(productsRef, productData);
            console.log('Productos agregados exitosamente');
        }
    } catch (error) {
        console.error('Error al agregar productos: ', error);
    }
};

seedProducts();
