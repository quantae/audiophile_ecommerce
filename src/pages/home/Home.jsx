/* eslint-disable react/prop-types */
import styles from "./home.module.css";
import RootLayout from "../../layouts/RootLayout";
import ProductCategoryCard from "../../feature/product_category_card/ProductCategoryCard";
import FeatureProduct from "../../components/home_feature_product/FeatureProductA";
import BringingYou from "../../components/bringing_you_the_best/BringingYou";
import data from "../../assets/data/data.json";
import { getCategoryTitles, getCategoryImages } from "../../utils/reuseableFnc";
import { ProductDescription } from "../../feature/product_description/ProductDescription";
import { useNavigate } from "react-router-dom";
import ImageItem from '../../assets/product_assets/home/mobile/image-speaker-zx9.png';

/**
 * Displays the content of the hero area.
 * @returns ProductDescription component with variant A
 */
const HeroArea = () => {
  const navigate = useNavigate();
  const heroProductToShow = data.find((item) => item.slug === "xx99-mark-two-headphones");
  return (
    <div className={styles.hero}>
      <ProductDescription 
      variant="A" 
      showNewTag={heroProductToShow.new}
      newTagVariant="secondary"
      productTitle={heroProductToShow.name}
      productDescription={heroProductToShow.description}
      buttonVariant="primary"
      onClick={() => navigate (`/product/${heroProductToShow.slug}`)}
      />
    </div>
  );
};

const Home = () => {
  // get category images and titles from resuable data class.
  const categoryImages = getCategoryImages();
  const categoryTitle = getCategoryTitles(data);
  const featureProductA = data.find((item) => item.slug === "zx9-speaker");
  const featureProductB = data.find((item) => item.slug === "zx7-speaker");
  const featureProductC = data.find((item) => item.slug === "yx1-earphones");

  const navigate = useNavigate();

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
              // onClick={() => console.log("product category Shop button clicked: category", category)}
              onClick={() => navigate(`categories/${category.toLowerCase()}`)}
            />
          ))}

          <FeatureProduct 
          variant="A" 
          productTitle={featureProductA.name}
          productDescription={featureProductA.description}
          itemImage={featureProductA.image.desktop.replace("./assets/product-zx9-speaker/desktop/image-product.jpg", "/src/assets/product_assets/home/mobile/image-speaker-zx9.png")}
          onClick={() => console.log( `product/${featureProductA.slug}`)} />
          {/* ../../../resources/assets/home/mobile/image-speaker-zx7.jpg*/}
          <FeatureProduct 
          variant="B" 
          title={featureProductB.name}
          onClick={() => (console.log(`product/${featureProductB.slug}`))}
          
          />
          <FeatureProduct 
          variant="C" 
          title={featureProductC.name}
          onClick={() => (console.log(`product/${featureProductC.slug}`))}
          />
          <BringingYou />
        </div>
      </RootLayout>
    </div>
  );
};

export default Home;
