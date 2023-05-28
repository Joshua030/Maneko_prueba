import { useState } from "react";
import CardHome from "./cardHome";
import styles from "./sectionCards.module.css";

interface Props {
  title: string;
  data: {
    imgUrl: string;
    width: number;
    height: number;
    category: string;
    productName: string;
    productDescription: string;
    price: string;
    productId: number;
  }[];
}

const SectionCards = ({ title, data }: Props) => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    // Implement the logic to handle add here
    if(data.length-1===count){
      setCount(0)
      return
    }
    setCount((prevCount) => prevCount + 1);
  };

  const handleSubtract = () => {
    if(count===0){
      setCount(data.length-1)
      return
    }
    // Implement the logic to handle subtract here
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className={`${styles.mainContainer} container`}>
      <div className={`${styles.innerContainer} innercontainer`}>
        <div className={styles.titleContainer}>
          <div className={styles.titleInnerContainer}>
            <h2>{title}</h2>
          </div>
        </div>
        <div className={styles.cardMobileCarousel}>
          <CardHome
            imgUrl={data[count].imgUrl}
            imgName={data[count].productName}
            category={data[count].category}
            productName={data[count].productName}
            productDescription={data[count].productDescription}
            price={data[count].price}
            width={data[count].width}
            height={data[count].height}
            handleAdd={handleAdd}
            handleSubtract={handleSubtract}
          />
        </div>
        <div className={`${styles.productsContainer} ${styles.mobile}`}>
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
              <div
                key={productId}
                className={`${styles.cardSectionContainer} container`}
              >
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
