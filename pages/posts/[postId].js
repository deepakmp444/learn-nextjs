function Post({ post }) {
  return (
    <>
      <div>Post</div>
      <div key={post.id}>
        <p>{post.title}</p>
      </div>
    </>
  );
}

export default Post;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
}
