import Image from "next/image";
import styles from "./galleryCard.module.css";
interface Props {
  imgUrl: string;
  imgUrlMb:string
  imgName: string;
  productDescription: string;
}
const GalleryCard = ({ imgUrl,imgUrlMb, imgName, productDescription }: Props) => {
  return (
    <div className={`${styles.mainContainer} innercontainer`}>
      <div className={styles.titleContainer}>
        <p>{productDescription}</p>
      </div>
      <div className={`${styles.imgContainer} ${styles.destok}`}>
        <Image src={imgUrl} alt={imgName} fill  />
      </div>
      <div className={`${styles.imgContainer} ${styles.mobile}`}>
        <Image src={imgUrlMb} alt={imgName} fill  />
      </div>
    </div>
  );
};

export default GalleryCard;
