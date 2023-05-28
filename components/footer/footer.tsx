import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.mainContainer} container`}>
      <div className={`${styles.innerContainer}`}>
        <div className={styles.externalNewsContainer}>
          <div className={styles.newsContainer}>
            <div className={styles.firstNewsContainer}>
              <p>Newsletter</p>
              <p>The Good Cream</p>
            </div>
            <div className={styles.SecondNewsContainer}>
              <p>Suscríbete para recibir novedades y ofertas exclusivas</p>
            </div>
            <div className={styles.thirdNewsContainer}>
              <input type="email" name="" placeholder="Dirección de correo" />
            </div>
          </div>
        </div>
        <div className={styles.externalMainContainer}>
          <div className={styles.mainInformation}>
            <nav className={styles.mainMenu}>
              <div className={styles.mainMenuTitle}>
                <h3>Información</h3>
              </div>
              <ul>
                <li>
                  <Link href="#">¿Qué es CBD?</Link>
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
              </ul>
            </nav>
            <nav className={styles.mainMenu}>
              <div className={styles.mainMenuTitle}>
                <h3>Productos</h3>
              </div>
              <ul>
                <li>
                  <Link href="#">Facial</Link>
                </li>
                <li>
                  <Link href="#">Corporal</Link>
                </li>
                <li>
                  <Link href="#">Cofres</Link>
                </li>
              </ul>
            </nav>
            <div className={styles.secondaryInformation}>
              <div className={styles.menuInformation}>
                <nav className={styles.mainMenu}>
                  <div className={styles.mainMenuTitle}>
                    <h3>Social</h3>
                  </div>
                  <ul>
                    <li>
                      <Link href="#">Facebook</Link>
                    </li>
                    <li>
                      <Link href="#">Instagram</Link>
                    </li>
                  </ul>
                </nav>
                <nav className={`${styles.mainMenu} ${styles.destok}`}>
                  <div className={styles.mainMenuTitle}>
                    <h3>Contacto</h3>
                  </div>
                  <ul>
                    <li>
                      <Link href="mailto:Hello@thegoodcream.com">Hello@thegoodcream.com</Link>
                    </li>
                  </ul>
                </nav>
                <nav className={`${styles.mainMenu} ${styles.mobile}`}>
                  <div className={styles.mainMenuTitle}>
                    <h3>Más información</h3>
                  </div>
                  <ul>
                    <li>
                      <Link href="#">Contactar</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className={styles.policiesInformation}>
              <nav className={styles.policiesMenu}>
                  <ul>
                    <li>
                      <Link href="#">Politica de privacidad</Link>
                    </li>
                    <li>
                      <Link href="#">Codiciones de uso y venta</Link>
                    </li>
                    <li>
                      <Link href="#">Aviso legal</Link>
                    </li>
                    <li>
                      <Link href="#">Política de reembolso</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.externalCopyright}>
        <div className={styles.copyrightContainer}>
          <p>© 2022 THE GOOD CREAM</p>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
