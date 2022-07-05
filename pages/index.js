import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1> Home Page</h1>
      <Link href="/product">
        <a>Product</a>
      </Link>
    </div>
  );
};

export default Home;
