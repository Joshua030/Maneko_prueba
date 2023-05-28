import Image from "next/image";
import styles from "./aboutHome.module.css";

const AboutHome = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={`${styles.innerContainer} innercontainer`}>
        <div className={styles.titleContainer}>
          <Image
            src="/static/simbolo-quimico-cbd.png"
            alt="simbolo quimico cbd"
            width={72}
            height={72}
          />
          <h2>¿Qué es el CBD?</h2>
        </div>
        <div className={styles.information}>
          <div className={styles.informationContainer}>
            <div className={styles.innerInformationContainer}>
              <div className={styles.itemContainer}>
                <Image
                  src="/static/icono-gotero.svg"
                  alt="simbolo gotero"
                  width={60}
                  height={60}
                />
                <p>
                  El cannabidiol, o CBD, es uno de los compuestos de la planta
                  Cannabis Sativa con mayores beneficios para tu piel y un gran
                  aliado en la cosmética.
                </p>
              </div>
              <div className={styles.itemContainer}>
                <div className={styles.iconContainer}>
                <Image
                  src="/static/simbolo-cuidado-manos.svg"
                  alt="simbolo cuidado manos"
                  width={60}
                  height={60}
                />
                </div>
                <p>
                  El CBD está transformando la industria de la belleza y el
                  bienestar, derribando todas las barreras sociales que
                  despertaban el escepticismo.
                </p>
              </div>
              <div className={styles.itemContainer}>
                <Image
                  src="/static/simbolo-piel-respirando.svg"
                  alt="simbolo piel respirando"
                  width={60}
                  height={60}
                />
                <p>
                  Otros de los grandes beneficios de este activo además de su
                  poder hidratante y antioxidante son los de antiinflamatorio y
                  calmante.
                </p>
              </div>
              <button className={styles.moreInformation}>Ver productos</button>
            </div>
          </div>
          <div className={styles.imgContainer}></div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
