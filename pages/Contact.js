import Navbar from "./Component/Navbar";
import Link from "next/link";
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
const contact = ({data}) => {
  return (
    <>
      <Navbar />
      {data.slice(0, 5).map((currentElem) => {
        return (
          <div
            key={currentElem.id}
            style={{ display: "flex", top: "50%", right: "50%" }}
          >
            <h3>{currentElem.id}</h3>
            <Link href={`blog/${currentElem.id}`}>
              <h2>{currentElem.title}</h2>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default contact;

