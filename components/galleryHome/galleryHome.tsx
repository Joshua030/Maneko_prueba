import GalleryCard from "./galleryCard";
import styles from "./galleryHome.module.css";

interface Props {
  title: string;
  data: {
    imgUrl: string;
    imgUrlMb:string;
    productDescription: string;
    productId: number;
  }[];
}

const GalleryHome = ({ title, data }: Props) => {
  return (
    <div className={`${styles.mainContainer} container`}>
      <div className={`${styles.innerContainer} innercontainer`}>
        <div className={styles.titleContainer}>
          <div className={styles.titleInnerContainer}>
            <h2>{title}</h2>
          </div>
        </div>
        <div className={styles.productsContainer}>
          {data?.map(
            ({
              imgUrl,
              imgUrlMb,
              productDescription,
              productId,
            }) => (
              <div key={productId} className={`${styles.cardSectionContainer} container`}>
                <GalleryCard
                  imgUrl={imgUrl}
                  imgUrlMb={imgUrlMb}
                  imgName={productDescription}
                  productDescription={productDescription}
                />
              </div>
            )
          )}
        </div>
      </div>
      <div className={styles.lineRelative}></div>
    </div>
  );
};

export default GalleryHome;