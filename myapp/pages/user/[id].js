import Head from "next/head";
import Link from "next/link";

function UserDetail({ user }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>User Detail Page</h1>
      <Link href="/user">
        <a>Back </a>
      </Link>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  const resp = await fetch(`http://localhost:3000/api/users/${id}`);
  const data = await resp.json();

  return { props: { user: data } };
}

export default UserDetail;
