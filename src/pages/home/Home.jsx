/* eslint-disable react/prop-types */
import styles from "./home.module.css";
import RootLayout from "../../layouts/RootLayout";
import ProductCategoryCard from "../../components/product_category_card/ProductCategoryCard";
import FeatureProduct from "../../components/home_feature_product/FeatureProductA";
import BringingYou from "../../components/bringing_you_the_best/BringingYou";
import data from "../../assets/data/data.json";
import { getCategoryTitles, getCategoryImages } from "../../utils/reuseableFnc";
import { ProductDescription } from "../../components/product_description/ProductDescription";

/**
 * Displays the content of the hero area.
 * @returns ProductDescription component with variant A
 */
const HeroArea = () => {
  return (
    <div className={styles.hero}>
      <ProductDescription variant="A" newTagDefault={false} />
    </div>
  );
};

const Home = () => {
  const categoryImages = getCategoryImages();
  const categoryTitle = getCategoryTitles(data);

  console.log("category title: ", categoryTitle);
  return (
    <div>
      <RootLayout>
        <HeroArea />
        <div className={styles.product_categories_container}>
          {categoryTitle.map((category, index) => (
            <ProductCategoryCard
              title={category}
              key={index}
              cardImage={categoryImages[category]}
            />
          ))}

          <FeatureProduct variant="A" />
          <FeatureProduct variant="B" />
          <FeatureProduct variant="C" />
          <BringingYou />
        </div>
      </RootLayout>
    </div>
  );
};

export default Home;
