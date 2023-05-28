"use client";

import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
import CustomSelect from "./customSelect";
import { MouseEvent, useEffect, useState } from "react";

const Header = () => {
  const [navVisible, setNavVisible] = useState(false);

  const handleNavDropdown = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setNavVisible(!navVisible);
    toggleBodyOverflow(!navVisible);
  };

  const toggleBodyOverflow = (hidden: boolean) => {
    document.documentElement.style.overflowY = hidden ? "hidden" : "auto";
    document.body.style.overflowY = hidden ? "hidden" : "auto";
  };

  useEffect(() => {
    return () => {
      toggleBodyOverflow(false);
    };
  }, []);

  return (
    <header
      className={`${styles.externalMainContainer} container ${
        navVisible === true ? styles.navVisible : ""
      }`}
    >
      <div className={styles.innerMainContainer}>
        <div className={styles.mainMenuContainer}>
          <button className={styles.btnNav} onClick={handleNavDropdown}>
            <Image
              src="/static/icons/menu-outline.svg"
              alt="simbolo abrir menu"
              width={24}
              height={24}
              className={styles.menuOutline}
            />
            <Image
              src="/static/icons/x-icon.svg"
              alt="simbolo cerrar menu"
              width={24}
              height={24}
              className={styles.closeOutline}
            />
          </button>

          <nav className={styles.mainMenu}>
            <ul>
              <li>
                <Link href="#">Facial</Link>
              </li>
              <li>
                <Link href="#">Corporal</Link>
              </li>
              <li>
                <Link href="#">Bienestar</Link>
              </li>
              <li>
                <Link href="#">Cofres</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.logoContainer}>
          <button className={styles.btnNav}>
            <Image
              src="/static/Logo-principal.png"
              alt="logo principal"
              // width={417}
              // height={83}
              fill
            />
          </button>
        </div>
        <div className={styles.userMenuContainer}>
          <CustomSelect />
          <button className={styles.btnIcon}>
            <Image
              src="/static/icons/user.svg"
              alt="logo de usuario"
              width={26}
              height={26}
            />
          </button>
          <button className={styles.btnIcon}>
            <Image
              src="/static/icons/search.svg"
              alt="logo lupa"
              width={26}
              height={26}
            />
          </button>
          <button className={styles.btnIcon}>
            <Image
              src="/static/icons/shopping-cart.svg"
              alt="logo carro de compras"
              width={26}
              height={26}
            />
          </button>
        </div>
      </div>
      <div className={styles.responsiveNavigation}>
        <div className={styles.innerNavigation}>
          <div className={styles.innerMenu}>
            <nav className={styles.innerMenuNav}>
              <div className={styles.innerMenuTitle}>
                <h3>Productos</h3>
              </div>
              <ul>
                <li>
                  <Link href="#">Todos</Link>
                </li>
                <li>
                  <Link href="#">Facial</Link>
                </li>
                <li>
                  <Link href="#">Corporal</Link>
                </li>
                <li>
                  <Link href="#">Bienestar</Link>
                </li>
                <li>
                  <Link href="#">Cofres</Link>
                </li>
              </ul>
            </nav>
            <nav className={styles.innerMenuNav}>
              <div className={styles.innerMenuTitle}>
                <h3>Más informacións</h3>
              </div>
              <ul>
                <li>
                  <Link href="#">Qué es el CBD</Link>
                </li>
                <li>
                  <Link href="#">Nosotras</Link>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href="#">FAQs</Link>
                </li>
                <li>
                  <Link href="#">Contacto</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.emptySpace}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
