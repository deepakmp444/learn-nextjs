import Link from "next/link";
import React from "react";

function Posts({ posts }) {
  return (
    <>
      <div>Post List</div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              <p>{post.title}</p>
            </Link>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default Posts;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data.slice(0, 11),
    },
  };
}
