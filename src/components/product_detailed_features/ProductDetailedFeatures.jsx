/* eslint-disable react/prop-types */
//import React from 'react'
import { useState } from "react";
import Button from "../button/Button";
import styles from "./product_detailed_features.module.css";
import { useCart } from "../hooks/useCart";
import gallaryImage from "../../assets/product_assets/shared/mobile/image-best-gear.jpg";
import { ProductDescription } from "../../feature/product_description/ProductDescription";
import { getCategoryImages, getCategoryTitles } from "../../utils/reuseableFnc";
import data from "../../assets/data/data.json";
import ProductCategoryCard from "../../feature/product_category_card/ProductCategoryCard";
import RootLayout from "../../layouts/RootLayout";
import { useParams } from "react-router-dom";
import ProductCartCountControl from "../../feature/navigation_bar/cart/ProductCartCountControl";

export const PriceTag = ({ price }) => (
  <div className={styles.pricetag}>
    <h2>$ {price}</h2>
  </div>
);

export const CartCounter = ({ Pquantity, increment, decrement }) => {
  return (
    <div className={styles.cart_counter}>
      {/* <button
        className={styles.button_minus}
        onClick={decrement}
      >
        -
      </button>
      <p>{Pquantity}</p>
      <button
        className={styles.button_plus}
        onClick={increment}
      >
        +
      </button> */}
    </div>
  );
};

export const FeatureText = ({ featureText }) => (
  <div className={styles.feature_text_container}>
    <h5>FEATURES</h5>
    <p className={styles.feature_text_p}>{featureText}</p>
  </div>
);
export const BoxListItems = ({ boxContent }) => {
  return (
    <div className={styles.in_the_box_container}>
      <h5>IN THE BOX</h5>
      {boxContent.map((item, index) => (
        <li className={styles.box_list_item} key={index}>
          <p>{item.quantity}x</p>
          <p>{item.item}</p>
        </li>
      ))}
    </div>
  );
};

export const Gallery = ({ productGallary }) => {
  const galleryImages = Object.values(productGallary);
  return (
    <div className={styles.gallary_container}>
      {galleryImages.map((image, index) => (
        <img
          src={image.mobile}
          style={{ borderRadius: "8px" }}
          alt="product gallery"
          key={index}
        />
      ))}
    </div>
  );
};

const ProductDetailedFeatures = ({
  price,
  featureText,
  boxContent,
  productGallary,

  item,
}) => {
  // const {addToCart, error} = useContext(CartContext);
  return (
    <div className={styles.container}>
      <div>
        <PriceTag price={price} />
        <div className={styles.cartCount_and_button_wrap}>
          <ProductCartCountControl item={item} />
        </div>
      </div>

      <FeatureText featureText={featureText} />

      <BoxListItems boxContent={boxContent} />
      <Gallery productGallary={productGallary} />
    </div>
  );
};

export default ProductDetailedFeatures;
