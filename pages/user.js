function User({ user }) {
  return (
    <>
      <div>User List</div>
      {user.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        );
      })}
    </>
  );
}

export default User;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      user: data,
    },
  };
}
