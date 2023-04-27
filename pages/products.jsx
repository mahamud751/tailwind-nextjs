import Head from "next/head";
import React from "react";

export async function getServerSideProps() {
  const res = await fetch(`https://korbojoy-server.onrender.com/api/products`);
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
}
//redux + typescript + datastructures + algorithms + nodejs + prisma + mongoose + postgresql + react native

const products = ({ users }) => {
  return (
    <>
      <Head>
        <title>Products List</title>
      </Head>
      <h1>Products List</h1>
      <ul>
        {users.map((user) => (
          <>
            <div style={{ margin: 40 }}>
              <li key={user._id}>
                <p>Name: {user.name}</p>
              </li>
              <hr />
            </div>
          </>
        ))}
      </ul>
    </>
  );
};

export default products;
