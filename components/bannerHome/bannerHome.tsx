import Image from "next/image";
import styles from "./banner.module.css";
import React from "react";

const BannerHome = () => {
  const title = "Botanical Premium Cosmetics";
  return (
    <div className={`${styles.mainContainer} container`}>
      <div className={`${styles.innerContainer} innercontainer`}>
      <div className={`${styles.informationSecondContainer} ${styles.mobile}`}>
            <div className={styles.firstItem}>
              <div className={styles.firstItemTitle}>
                <Image
                  src="/static/simbolo-estrella.png"
                  alt="icono estrella"
                  width={20}
                  height={20}
                />
                <h3>Premium</h3>
              </div>
              <p>Apostamos por ofrecerte los mejores comséticos naturales</p>
            </div>
            <div className={styles.firstItem}>
              <div className={styles.firstItemTitle}>
                <Image
                  src="/static/icono-hoja-cannabis.png"
                  alt="icono cannabis"
                  width={20}
                  height={20}
                />
                <h3>Cannabidiol</h3>
              </div>
              <p>Uno de los compuestos con mayores beneficios para la salud</p>
            </div>
            <div className={styles.firstItem}>
              <div className={styles.firstItemTitle}>
                <Image
                  src="/static/icono-corazon.png"
                  alt="icono corazon"
                  width={20}
                  height={20}
                />
                <h3>Bienestar</h3>
              </div>
              <p>
                Productos pensados para mejorar tu bienestar y sentirte bien
              </p>
            </div>
            <div className={styles.firstItem}>
              <div className={styles.firstItemTitle}>
                <Image
                  src="/static/icono-simbolo-mujer.png"
                  alt="icono cannabis"
                  width={20}
                  height={20}
                />
                <h3>Nosotras</h3>
              </div>
              <p>The Good Cream, un lugar donde te sientes acompañada</p>
            </div>
          </div>
        <div className={styles.externalImgContainer}>
        <div className={styles.imgContainer}>
          <Image
            src="/static/producto1.png"
            alt="Perricone MD"
            // width={704}
            // height={577}
            fill
          />
          </div>
          <div className={styles.arrowsContainer}>
          <Image
              src="/static/icons/arrow-right-mobile.svg"
              alt="icono flecha direccion izquierda"
              width={40}
              height={40}
              className="mobile"
            />
            <Image
              src="/static/arrow-left-circle.svg"
              alt="icono flecha direccion izquierda"
              width={40}
              height={40}
              className="destok"
            />
            <Image
              src="/static/arrow-right-circle.svg"
              alt="icono flecha direccion izquierda"
              width={40}
              height={40}
            />
           
          </div>
        

        </div>

        <div className={styles.informationContainer}>
          <div className={styles.informationFirstContainer}>
            <h2 className={styles.mainTitle}>
              {title.split(" ").map((word, index) => (
                <React.Fragment key={index}>
                  {word}
                  <br />
                </React.Fragment>
              ))}
            </h2>
            <p className={styles.informationDescription}>
              Apostamos por ofrecerte los mejores cosméticos naturales, a base
              de cáñamo, para un cuidado completo de tu piel.
            </p>
          </div>
          <div className={styles.informationSecondContainer}>
            <div className={styles.firstItem}>
              <div className={styles.firstItemTitle}>
                <Image
                  src="/static/simbolo-estrella.png"
                  alt="icono estrella"
                  width={20}
                  height={20}
                />
                <h3>Premium</h3>
              </div>
              <p>Apostamos por ofrecerte los mejores comséticos naturales</p>
            </div>
            <div className={styles.firstItem}>
              <div className={styles.firstItemTitle}>
                <Image
                  src="/static/icono-hoja-cannabis.png"
                  alt="icono cannabis"
                  width={20}
                  height={20}
                />
                <h3>Cannabidiol</h3>
              </div>
              <p>Uno de los compuestos con mayores beneficios para la salud</p>
            </div>
            <div className={styles.firstItem}>
              <div className={styles.firstItemTitle}>
                <Image
                  src="/static/icono-corazon.png"
                  alt="icono corazon"
                  width={20}
                  height={20}
                />
                <h3>Bienestar</h3>
              </div>
              <p>
                Productos pensados para mejorar tu bienestar y sentirte bien
              </p>
            </div>
            <div className={styles.firstItem}>
              <div className={styles.firstItemTitle}>
                <Image
                  src="/static/icono-simbolo-mujer.png"
                  alt="icono cannabis"
                  width={20}
                  height={20}
                />
                <h3>Nosotras</h3>
              </div>
              <p>The Good Cream, un lugar donde te sientes acompañada</p>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.moreInformation}>Ver productos</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
