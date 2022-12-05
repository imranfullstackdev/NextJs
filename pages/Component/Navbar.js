import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import images from 'next/image'

const Navbar = () => {
  return (
    <>
      <div className={styles.grid}>
        <nav>
          <ul>
            <li>
              <Link href="/" style={{ color: "red" }}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <style jsx>
        {`
          li {
            color: blue;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
