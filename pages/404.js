import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Navbar } from "./Component/Navbar";
const Error = () => {
  const router = useRouter();

  const navigateFunction = () => {
    router.push("/");
  };
  useEffect(() => {
    setTimeout(() => {
      alert("page dont exist navigating to home page");
      router.push("/");
    }, 3000);
  }, []);
  return (
    <>
      <Navbar />
      <h1>404 ERROR PAGE</h1>
      <h6>PAGE NOT FOUND</h6>
      {/* <Link href="/">Back To Home Page</Link> */}
      {/* <a onClick={(()=>{router.push('/')})}>BACKTO HOME Page</a> */}
      <a onClick={navigateFunction}>BACKTO HOME Page</a>
    </>
  );
};

export default Error;
