export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  const paths = data.map((curElem) => {
    return {
      params: {
        pageNO: curElem.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNO;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const pageNo = ({ data }) => {
  const { id, title, body } = data;
  return (
    <>
      <div>
        <h3>{id}</h3>
        <h3>Title:{title}</h3>
        <h3>Body:{body}</h3>
      </div>
    </>
  );
};

export default pageNo;
