import Image from "next/image";
import styles from "./galleryCard.module.css";
interface Props {
  imgUrl: string;
  imgName: string;
  productDescription: string;
}
const GalleryCard = ({ imgUrl, imgName, productDescription }: Props) => {
  return (
    <div className={`${styles.mainContainer} innercontainer`}>
      <div className={styles.titleContainer}>
        <p>{productDescription}</p>
      </div>
      <div className={styles.imgContainer}>
        <Image src={imgUrl} alt={imgName} fill />
      </div>
    </div>
  );
};

export default GalleryCard;
