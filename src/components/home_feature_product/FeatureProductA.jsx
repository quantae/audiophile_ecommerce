/* eslint-disable react/prop-types */
//import React from 'react'
import { ProductDescription, ProductTitle } from "../../feature/product_description/ProductDescription";
import styles from "./feature_product_a.module.css";
import imageSpeakerZX9 from "../../../resources/assets/home/mobile/image-speaker-zx9.png";
import imageSpeakerZX7 from "../../../resources/assets/home/mobile/image-speaker-zx7.jpg";
import imageEarphonesYX1 from "../../../resources/assets/home/mobile/image-earphones-yx1.jpg";



import Button from "../button/Button";


export const VariantA = ({
    itemImage = imageSpeakerZX9, 
    productTitle,
    productDescription,
    onClick,
titleColorDefault,
descriptionColor,
}) => (
    <div className={styles.A_container}>
        <div className={styles.featureA_image_wrap}>
              {itemImage && (
        <img src={itemImage} alt="itemImage" className={styles.product_image} style={{width: '60%'}}/>
      )}
        </div>
    <div className={styles.featureA_des_wrap}>
  <ProductDescription 
        variant="B" // This is the variant of the product description component that has no image.
        showNewTag={false} 
        buttonVariant="primaryDark" 
        productTitle={productTitle}
        productDescription={productDescription}
        onClick={onClick}
        itemImage={false}
        descriptionColor={descriptionColor}
        titleColorDefault={titleColorDefault}
        />
    </div>
    </div>
    
);

export const VariantB = ({
    itemImage = imageSpeakerZX7,
    title,
    onClick

}) => (
    <div className={styles.B_container}>
    <div className={styles.product_img_wrap}>
         <img src={itemImage} alt="itemImage" className={styles.b_product_image} />
    </div>
            
        <div className={styles.product_description}>
            <ProductTitle title={title} style={{color: 'var(--clr-dark'}}/>
            <Button label="SEE PRODUCT" variant="secondary" onClick={onClick}/>
        </div>
        
    </div>
);

export const VariantC = ({
    itemImage = imageEarphonesYX1,
    title,
    onClick}) => (
    <div className={styles.C_container}>
        <div>
            <img src={itemImage} alt="itemImage" className={styles.product_image} />
        </div>
        
        <div className={styles.product_description_variant_c}>
            <ProductTitle title={title} style={{color: 'var(--clr-dark'}}/>
            <Button label="SEE PRODUCT" variant="secondary" onClick={onClick}/>
        </div>
    </div>
);
const FeatureProduct = ({ 
    variant,
    productTitle,
    title,
    productDescription,
    itemImage,
    onClick,
    titleColorDefault,
    descriptionColor,
    }) => {
        
       

        switch (variant) {
            case "A": 
                return <VariantA 
                onClick={onClick} 
                productTitle={productTitle}
                productDescription={productDescription}
                itemImage={itemImage}
                titleColorDefault={titleColorDefault}
                descriptionColor={descriptionColor}
                />
            case "B":
                return <VariantB  
                onClick={onClick} 
                title={title}
                productDescription={productDescription}
                itemImage={itemImage}
             />
            case "C":
                return <VariantC  
                onClick={onClick} 
                title={title}
                productDescription={productDescription}
                itemImage={itemImage}/>
            default:
                return null;
        }

};

export default FeatureProduct;
