import React from "react";
import styles from "@/styles/Navbar.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <div className={`container-fluid p-0 ${styles.nav_bar}`}>
      <nav className={`${styles.navbar} ${styles.navbar_expand_lg} bg-none navbar-dark py-3`}>
        <Link href="/" className={`${styles.navbar_brand} px-lg-4 m-0`}>
          <h1 className="m-0 display-4 text-uppercase text-white">Next-Coffee</h1>
        </Link>
        <div className={`${styles.navbar_nav} ml-auto p-4`}>
          <Link href="/" className={`${styles.nav_link} ${styles.active_nav_link}`}>Home</Link>
          <Link href="/about" className={`${styles.nav_link}`}>About</Link>
          <Link href="/services" className={`${styles.nav_link}`}>Service</Link>
          <Link href="/menu" className={`${styles.nav_link}`}>Menu</Link>
          <Link href="/reservation" className={`${styles.nav_link}`}>Reservation</Link>
          <Link href="/testimonial" className={`${styles.nav_link}`}>Testimonial</Link>
          <Link href="/contact" className={`${styles.nav_link}`}>Contact</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
