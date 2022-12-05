import Navbar from "./Component/Navbar";
import Images from 'next/image'


const about = () => {
  return (
    <>
      <Navbar />
      <Images src="/wolf.jpg" width="500" height="300" alt="images"></Images>
      <h1>welcome to about</h1>
    </>
  );
};

export default about;
