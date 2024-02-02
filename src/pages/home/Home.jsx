/* eslint-disable react/prop-types */

// Import dependencies
import { useNavigate } from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill"; 
import { useEffect } from "react";

// Import components
import styles from "./home.module.css";
import RootLayout from "../../layouts/RootLayout";
import ProductCategoryCard from "../../feature/product_category_card/ProductCategoryCard";
import FeatureProduct from "../../components/home_feature_product/FeatureProductA";
import BringingYou from "../../components/bringing_you_the_best/BringingYou";
import { ProductDescription } from "../../feature/product_description/ProductDescription";




// variable imports
import data from "../../assets/data/data.json";
import { getCategoryTitles, getCategoryImages } from "../../utils/reuseableFnc";
import HeroImages from '../../assets/product_assets/no-background/hero_headphone.png';


/**
 * Displays the content of the hero area.
 * ProductDescription component with variant A
 */
const HeroArea = () => {

useEffect(() => {
   // scrolls page to top when component mounts
   smoothscroll.polyfill();
   window.scroll({ top: 0, left: 0, behavior: "smooth" });
}, []);

  const navigate = useNavigate();
  const heroProductToShow = data.find((item) => item.slug === "xx99-mark-two-headphones");
  return (
    <div className={styles.hero_container}>
       <div className={styles.hero}>
    {/* <img src={HeroImages} alt="hero"/> */}
      <ProductDescription 
      variant="A" 
      showNewTag={heroProductToShow.new}
      newTagVariant="secondary"
      productTitle={heroProductToShow.name}
      productDescription={heroProductToShow.description}
      buttonVariant="primary"
      descriptionColor={true}
      onClick={() => navigate (`/product/${heroProductToShow.slug}`)}
      itemImage={HeroImages}
      // itemImage={heroProductToShow.image.mobile.replace("./assets/product-xx99-mark-two-headphones/mobile/image-product.jpg", "../assets/product_assets/home/mobile/image-header.jpg")}
      />
      
    </div>
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

 // console.log("category title: ", categoryTitle);
  return (
    <div>
      <RootLayout>
        <div className={styles.home_wrapper}>
          <HeroArea />
        </div>
        

        {/* Product categories component */}
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
</div>
<div className={styles.product_feature_container}>
{/**Featured products */}
          <FeatureProduct 
          variant="A" 
          productTitle={featureProductA.name}
          productDescription={featureProductA.description}
          itemImage={featureProductA.image.desktop.replace("./assets/product-zx9-speaker/desktop/image-product.jpg", "/src/assets/product_assets/home/mobile/image-speaker-zx9.png")}
          onClick={() => navigate( `product/${featureProductA.slug}`)} 
          titleColorDefault={true}
          descriptionColor={true}
          />
          {/* ../../../resources/assets/home/mobile/image-speaker-zx7.jpg*/}
          
          <div className={styles.featureB_wrap}>
             <FeatureProduct 
          variant="B" 
          title={featureProductB.name}
          onClick={() => (navigate(`product/${featureProductB.slug}`))}
        
          />
          </div>
         
          <FeatureProduct 
          variant="C" 
          title={featureProductC.name}
          onClick={() => (navigate(`product/${featureProductC.slug}`))}
          />
          <BringingYou />
        </div>
      </RootLayout>
    </div>
  );
};

export default Home;
