import Image from "next/image";
import styles from "./cardHome.module.css";
interface Props {
  imgUrl:string;
  imgName:string;
  width:number;
  height: number;
  category:string;
  productName:string;
  productDescription:string;
  price: string
}
const CardHome = ({imgUrl,imgName,width,height,category,productName,productDescription, price}:Props) => {
  return (
    <div className={`${styles.mainContainer} innercontainer`}>
     <Image
                  src={imgUrl}
                  alt={imgName}
                  width={width}
                  height={height}
                />
                <div className={`${styles.categoryButton} buttonLabel`}>{category}</div>
                <h3>{productName}</h3>
                <p>{productDescription}</p>
                <p>{price}</p>
                <button className={`${styles.buyButton}`}>Comprar</button>
    </div>
  )
}

export default CardHome