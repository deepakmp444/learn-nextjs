import Link from "next/link";
function Product({ productId = 100 }) {
  // TODO: When we use "replace" then it totally replace =>  '/product' route then it goes in "/" route

  return (
    <div>
      <h3>
        <Link href="/">
          <a>Home</a>
        </Link>
      </h3>
      <h1>
        <Link href="/product/1">
          <a> Product 1</a>
        </Link>
      </h1>
      <h1>
        <Link href="/product/2">
          <a> Product 2</a>
        </Link>
      </h1>
      <h1>
        <Link href="/product/3" replace>
          <a> Product 3</a>
        </Link>
      </h1>
      <h1>
        <Link href={`/product/${productId}`}>
          <a> Product {productId}</a>
        </Link>
      </h1>
      {/* <h1>Product 2</h1>
      <h1>Product 3</h1> */}
    </div>
  );
}

export default Product;
