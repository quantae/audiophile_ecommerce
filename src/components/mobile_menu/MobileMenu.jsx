/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
//dependency imports
import { useNavigate } from "react-router-dom";

//component imports
import ProductCategoryCard from "../../feature/product_category_card/ProductCategoryCard";
import styles from "./mobile_menu.module.css";

// variable imports
import {
  getCategoryTitles,
  getCategoryImages,
  getProductData,
} from "../../utils/reuseableFnc";

const MobileMenu = () => {
  const navigate = useNavigate();
  const categoryImages = getCategoryImages();
  const categoryTitle = getCategoryTitles(getProductData());
  return (
    <div className={styles.container}>
      {categoryTitle.map((category, index) => (
        <ProductCategoryCard
          title={category}
          key={index}
          cardImage={categoryImages[category]}
          onClick={() => {
            navigate(`/categories/${category.toLowerCase()}`);
          }}
       
        />
      ))}
    </div>
  );
};

export default MobileMenu;
