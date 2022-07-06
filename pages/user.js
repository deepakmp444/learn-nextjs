import User from "../components/user";

function UserList({ user }) {
  return (
    <>
      <div>User List</div>
      {user.map((user) => {
        return (
          <div key={user.id}>
            <User user={user} />
          </div>
        );
      })}
    </>
  );
}

export default UserList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      user: data,
    },
  };
}
