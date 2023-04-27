import Blog from "@/components/Home/Blog";
import Blogs from "@/components/Home/Blogs";
import Card from "@/components/Home/Card";
import Cart from "@/components/Home/Cart";
import Category from "@/components/Home/Category";
import Contact from "@/components/Home/Contact";
import News from "@/components/Home/News";
import QuickView from "@/components/Home/QuickView";
import Table from "@/components/Home/Table";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

import Head from "next/head";

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
}

export default function Home({ users }) {
  return (
    <>
      <Head>
        <title>Users List</title>
      </Head>
      <Navbar />
      <Cart />
      <Category />
      <Card/>
      <Blogs/>
      <QuickView />
    
      <News />
      <Blog />
<Table/>
      <Contact />
      <Footer />
    </>
  );
}
