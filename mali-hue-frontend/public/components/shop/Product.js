import styles from "./Product.module.css";
import Image from "next/image";
import { getProductById } from "@/services/api";
import ProductCard from "./productCard";



export default async function Product({productID}) {

    const product = await getProductById(productID);

    return (
      <div>
        <ProductCard 
        product={product} />
      </div>
    )

}
