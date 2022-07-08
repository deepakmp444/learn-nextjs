function News({ news }) {
  return (
    <>
      <div>News List</div>
      {news.map((singleNews) => {
        return (
          <div key={singleNews.id}>
            <p>{singleNews.title}</p>
          </div>
        );
      })}
    </>
  );
}

export default News;

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      news: data,
    },
  };
}
