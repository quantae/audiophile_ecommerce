//import React from 'react'

import BringingYou from "../../components/bringing_you_the_best/BringingYou";
import ProductCategoryCard from "../../feature/product_category_card/ProductCategoryCard";
import { ProductDescription } from "../../feature/product_description/ProductDescription";
import RootLayout from "../../layouts/RootLayout";
import styles from "./product_category_page.module.css";
import { useParams } from "react-router-dom";
import data from "../../assets/data/data.json";
import { useEffect } from "react";
import {
  getCategoryImages,
  getCategoryTitles,
  getProductsByCategory,
  getProductData,
} from "../../utils/reuseableFnc";
import smoothscroll from "smoothscroll-polyfill";
import { useNavigate } from "react-router-dom";

const ProductCategoryPage = () => {
  const { category } = useParams();
  const categoryImages = getCategoryImages();
  const categoryTitle = getCategoryTitles(data);
  const navigate = useNavigate();

  /**
   * This useEffect Scrolls the window to the top of the
   * page when the component mounts.
   */
  useEffect(() => {
    smoothscroll.polyfill();
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, [categoryTitle]);

  const handdleCategoryCardClick = (productSlug) => {
    navigate(`/product/${productSlug.toLowerCase()}`);
   //console.log("clicked SEE PRODUCT on, ", productSlug);
  };
  /**
   * We Filter the data to get the category that matches the url parameter
   */
  const categoryLists = getProductsByCategory(getProductData(), category);
 // console.log("category lists", categoryLists);
  //console.log(typeof categoryLists);

  return (
    <>
      <RootLayout>
        <div className={`${styles.category_title_bar} text-center`}>
          <h5>{category.toUpperCase()}</h5>
        </div>
        <div className={styles.container}>
          {categoryLists.map((product) => (
            <ProductDescription
              variant="B"
              key={product.id}
              id={product.id}
              productTitle={product.name}
              productDescription={product.description}
              itemImage={product.categoryImage.mobile.replace(
                "./assets",
                "/product_assets/"
              )}
              showNewTag={product.new}
              titleColorDefault={false}
              productSlug={product.slug}
              onClick={() => handdleCategoryCardClick(product.slug)}
            />
          ))}
          <h4>SHOP BY CATEGORY</h4>
          <div className={styles.product_category_wrap}>
         
            {categoryTitle.map((category, index) => (
              <ProductCategoryCard
                title={category}
                key={index}
                cardImage={categoryImages[category]}
                onClick={() =>
                  navigate(`/categories/${category.toLowerCase()}`)
                }
              />
            ))}
          </div>

          <BringingYou />
        </div>
      </RootLayout>
    </>
  );
};

export default ProductCategoryPage;
