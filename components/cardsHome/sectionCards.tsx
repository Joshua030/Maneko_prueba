import CardHome from "./cardHome";
import styles from "./sectionCards.module.css";

interface Props {
  title: string;
  data: {
    imgUrl: string;
    width: number;
    height:number;
    category: string;
    productName: string;
    productDescription: string;
    price: string;
    productId: number;
  }[];
}

const SectionCards = ({ title, data }: Props) => {
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
              width,
              height,
              category,
              productName,
              productDescription,
              productId,
              price,
            }) => (
              <div key={productId} className={`${styles.cardSectionContainer} container`}>
                <CardHome
                  imgUrl={imgUrl}
                  imgName={productName}
                  category={category}
                  productName={productName}
                  productDescription={productDescription}
                  price={price}
                  width={width}
                  height={height}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionCards;
