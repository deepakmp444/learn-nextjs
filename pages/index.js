import Link from "next/link";
import { useRouter } from "next/router";
const Home = () => {
  const router = useRouter();

  // TODO: We can use push and replace
  
  const handleClick = () => {
    // router.replace('/product');
    router.push("/product");
  };
  return (
    <div>
      <h1> Home Page</h1>
      <Link href="/product">
        <a>Product</a>
      </Link>
      <button onClick={handleClick}>For Checking Order</button>
    </div>
  );
};

export default Home;
