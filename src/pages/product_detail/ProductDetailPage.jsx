//import React from 'react'

import { ProductDescription } from "../../components/product_description/ProductDescription";
import ProductDetailedFeatures from "../../components/product_detailed_features/ProductDetailedFeatures";
import RootLayout from "../../layouts/RootLayout";
import { getCategoryImages, getCategoryTitles, getProductData } from "../../utils/reuseableFnc";
import ProductCategoryCard from "../../components/product_category_card/ProductCategoryCard";
import BringingYou from "../../components/bringing_you_the_best/BringingYou";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./product_detail_page.module.css";
import smoothscroll from "smoothscroll-polyfill";

const ProductDetailPage = () => {
  const [productDetails, setProductDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const categoryImages = getCategoryImages();
  const categoryTitle = getCategoryTitles(getProductData());
  const { productSlug } = useParams();
 

  const decodedProductSlugUrl = decodeURIComponent(productSlug).toLowerCase();
  // console.log("decoded productSlug after: ", decodedProductSlugUrl);
  // if (decodedProductSlugUrl === decodedProductSlugUrl) {
  //   console.log(true)
  // } else {
  //   console.log(false)
  // }

  
  

  useEffect(() => {
    // reset productDetails state
    setProductDetails(null);
    setIsLoading(true);
    console.log("product slug in data: ", getProductData().map((item) => item.slug.toLowerCase()));
    const fetchedProductDetails = getProductData()
    .find((item) => {
      const isMatch = item.slug.toLowerCase() === decodedProductSlugUrl;
      console.log("Testing slug:", item.slug, "decoded url:", decodedProductSlugUrl, "Result:", isMatch);
      return isMatch;
    });
    // scrolls page to top when component mounts
    smoothscroll.polyfill();
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
   
    if (fetchedProductDetails) {
      setProductDetails(fetchedProductDetails);
    }
  
    setIsLoading(false);

   
    // console.log("product details useEFfect:", fetchedProductDetails);
    // console.log("decoded productSlug from useEffect: ", decodedProductSlugUrl)
  }, [decodedProductSlugUrl, productDetails, productSlug]);

  if (isLoading) {
    return (
      <div className="text-center">
        <p>Loading...</p>
      </div>
    );
  }
  if (!productDetails) return <div>product not found</div>;



  const updatedGallery = Object.entries(productDetails.gallery).reduce(
    (acc, [key, value]) => {
      acc[key] = {
        mobile: value.mobile.replace("./assets", "/src/assets/product_assets/"),
        tablet: value.tablet.replace("./assets", "/src/assets/product_assets/"),
        desktop: value.desktop.replace(
          "./assets",
          "/src/assets/product_assets/"
        ),
      };
      return acc;
    },
    {}
  );
  return (
    <div>
      <RootLayout>
        <div className={styles.container}>
          <ProductDescription
            variant="B"
            key={productDetails.productSlug}
            showButton={false}
            showNewTag={false}
            productTitle={productDetails.name}
            productDescription={productDetails.description}
            newTag={productDetails.new}
            slug={productDetails.slug}
            itemImage={productDetails.categoryImage.mobile.replace(
              "./assets",
              "/src/assets/product_assets/"
            )}
          />
          <ProductDetailedFeatures
            price={productDetails.price}
            featureText={productDetails.features}
            quantity={productDetails.includes.quantity}
            boxContent={productDetails.includes}
            productGallary={updatedGallery}
            key={productDetails.productSlug}
          />
          <h4 className={styles.category_title}>YOU MAY ALSO LIKE</h4>
          {productDetails.others.map((product) => {
          const updatedImage = product.image.mobile.replace("./assets", "/src/assets/product_assets/")
          return (
            <>
              <ProductDescription variant="C" productTitle={product.name} itemImage={updatedImage} titleColorDefault={false} productSlug={product.slug} key={product.id}/>
            </>
            );
          })}

          {categoryTitle.map((category, index) => (
            <ProductCategoryCard
              title={category}
              key={index}
              cardImage={categoryImages[category]}
            />
          ))}
          <BringingYou />
        </div>
      </RootLayout>
    </div>
  );
};

export default ProductDetailPage;
