import Product from "@/public/components/shop/Product";

export default async function ProductPage({ params }) {

  const unwrappedParams = await params;
  const productID = parseInt(unwrappedParams.slug[0]);
    console.log("Product ID :", productID);

  return (
    <main>
      <Product productID={productID} />
    </main>
  );
}
