import { useRouter } from "next/router";

function ProductList() {
  const router = useRouter(); // useRouter returns Objects
  const productId = router.query.productId;
  return (
    <div>
      <h1>Product Details {productId}</h1>
    </div>
  );
}

export default ProductList;
