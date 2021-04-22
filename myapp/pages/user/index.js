import Head from "next/head";
import { useRouter } from "next/router";
import UserCard from "../../components/UserCard";
import styles from "../../styles/User.module.css";

function User({ users }) {
  const router = useRouter();

  const hanldeGoToDetail = (id) => {
    router.push(`/user/${id}`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>User Page</h1>
      <ul>
        {users.map((user) => (
          // <li key={user.id}>
          //   {user.name} -{" "}
          //   <button onClick={() => hanldeGoToDetail(user.id)}>Detail</button>
          // </li>
          <UserCard user={user} onClick={(id) => hanldeGoToDetail(id)} />
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const resp = await fetch("http://localhost:3000/api/users");
  const data = await resp.json();

  return { props: { users: data } };
}

export default User;
