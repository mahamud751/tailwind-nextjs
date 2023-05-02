import Blog from "@/components/Home/Blog";
import Blogs from "@/components/Home/Blogs";
import Card from "@/components/Home/Card";
import Cart from "@/components/Home/Cart";
import Category from "@/components/Home/Category";
import Contact from "@/components/Home/Contact";
import Logo from "@/components/Home/Logo";
import News from "@/components/Home/News";
import Promo from "@/components/Home/Promo";
import QuickView from "@/components/Home/QuickView";
import Table from "@/components/Home/Table";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Head from "next/head";

export default function Home({ users }) {
  return (
    <>
      <Head>
        <title>Tailwind CSS</title>
      </Head>
      <Navbar />
      <Cart />
      <Category />
      <Card />
      <Blogs />
      <QuickView />

      {/* <Blog /> */}
      {/* <Table /> */}

      <Promo />
      <Contact />
      <News />
      <Logo />
      <Footer />
    </>
  );
}
