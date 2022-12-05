import Link from "next/link";
import Navbar from "./Component/Navbar";
import Head from "next/head";
const index = () => {
  return (
    <>
    <Head>
      <title>Next Js Title</title>
    </Head>
      <Navbar />

      <h1>welcome to index</h1>
    </>
  );
};

export default index;
