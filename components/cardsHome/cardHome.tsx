import Image from "next/image";
import styles from "./cardHome.module.css";
interface Props {
  imgUrl: string;
  imgName: string;
  width: number;
  height: number;
  category: string;
  productName: string;
  productDescription: string;
  price: string;
  handleAdd?: () => void;
  handleSubtract?: () => void;
}
const CardHome = ({
  imgUrl,
  imgName,
  width,
  height,
  category,
  productName,
  productDescription,
  price,
  handleAdd,
  handleSubtract,
}: Props) => {

  return (
    <div className={`${styles.mainContainer} innercontainer`}>
      <Image src={imgUrl} alt={imgName} width={width} height={height} />
      <div className={styles.arrowsContainer}>
        <button className={styles.arrowBtn} onClick={handleSubtract} >
          <Image
            src="/static/icons/arrow-right-mobile.svg"
            alt="icono flecha direccion izquierda"
            width={40}
            height={40}
          />
        </button>
        <button className={styles.arrowBtn} onClick={handleAdd}>
        <Image
          src="/static/arrow-right-circle.svg"
          alt="icono flecha direccion izquierda"
          width={40}
          height={40}
        />
          </button>
      </div>
      <div className={`${styles.categoryButton} buttonLabel`}>{category}</div>
      <h3>{productName}</h3>
      <p>{productDescription}</p>
      <p>{price}</p>
      <button className={`${styles.buyButton}`}>Comprar</button>
    </div>
  );
};

export default CardHome;
