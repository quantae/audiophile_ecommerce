/* eslint-disable react/prop-types */
//import React from 'react'
import { ProductDescription, ProductTitle } from "../product_description/ProductDescription";
import styles from "./feature_product_a.module.css";
import imageSpeakerZX9 from "../../../resources/assets/home/mobile/image-speaker-zx9.png";
import imageSpeakerZX7 from "../../../resources/assets/home/mobile/image-speaker-zx7.jpg";
import imageEarphonesYX1 from "../../../resources/assets/home/mobile/image-earphones-yx1.jpg";


import Button from "../button/Button";


export const VariantA = ({itemImage = imageSpeakerZX9}) => (
    <div className={styles.A_container}>
      {itemImage && (
        <img src={itemImage} alt="itemImage" className={styles.product_image} style={{width: '60%'}}/>
      )}
      <ProductDescription 
        variant="A" // This is the variant of the product description component that has no image.
        showNewTag={false} 
        buttonVariant="primaryDark" 
        productTitle="ZX9 SPEAKER"
        productDescription="Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound."/>
    </div>
);

export const VariantB = ({itemImage = imageSpeakerZX7}) => (
    <div className={styles.B_container}>
        <img src={itemImage} alt="itemImage" className={styles.product_image} />
        <div className={styles.product_description}>
            <ProductTitle title="ZX7 SPEAKER" style={{color: 'var(--clr-dark'}}/>
            <Button label="SEE PRODUCT" variant="secondary"/>
        </div>
        
    </div>
);

export const VariantC = ({itemImage = imageEarphonesYX1}) => (
    <div className={styles.C_container}>
        <img src={itemImage} alt="itemImage" className={styles.product_image} />
        <div className={styles.product_description_variant_c}>
            <ProductTitle title="ZX7 SPEAKER" style={{color: 'var(--clr-dark'}}/>
            <Button label="SEE PRODUCT" variant="secondary"/>
        </div>
    </div>
);
const FeatureProduct = ({ 
    variant,
    //itemImage,
    }) => {
        
       

        switch (variant) {
            case "A": 
                return <VariantA />
            case "B":
                return <VariantB />
            case "C":
                return <VariantC />
            default:
                return null;
        }

};

export default FeatureProduct;
