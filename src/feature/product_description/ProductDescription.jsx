/* eslint-disable react/prop-types */
import styles from "./product_description.module.css";
import Button from "../../components/button/Button";
import product_1_image from "../../../resources/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";


export const ProductTitle = ({ title, titleColorDefault }) => (
  <>
    <h1 className={titleColorDefault ? styles.title : styles.title_sec}>
      {title}
    </h1>
  </>
);

export const NewTag = ({
  newTagVariant,
  newTagText,
  showNewTag,
  className,
}) => {
  const newTagClassVariant = {
    primary: styles.new_tag_default,
    secondary: styles.new_tag_secondary,
  };
  const newTagClass = newTagClassVariant[newTagVariant];

  return (
    <>
      {showNewTag && (
        <h6 className={`${newTagClass} ${styles.newtag} ${className}`}>
          {newTagText}
        </h6>
      )}
    </>
  );
};

// This variant of the product description component has no image.
export const VariantA = ({
  itemImage,
  showNewTag,
  productTitle,
  productDescription,
  buttonVariant,
  newTagText,
  newTagVariant,
  showButton,
  onClick,
  titleColorDefault = true,
  productSlug,
  descriptionColor = false,
}) => (
  <div className={styles.container}>
    <div className={styles.a_text_container}>
      <NewTag
        newTagText={newTagText}
        showNewTag={showNewTag}
        newTagVariant={newTagVariant}
      />
      <ProductTitle
        title={productTitle}
        titleColorDefault={titleColorDefault}
      />
      <p
        className={`${styles.description} ${
          descriptionColor ? styles.light : styles.dark
        }`}
      >
        {productDescription}
      </p>
      {showButton && (
        <Button
          productSlug={productSlug}
          label="SEE PRODUCT"
          variant={buttonVariant}
          onClick={onClick}
        />
      )}
    </div>
    {itemImage && (
      <div className={styles.item_image_wrap}>
        <img
          src={itemImage}
          alt="itemImagess"
          className={styles.product_image}
        />
      </div>
    )}
  </div>
);

// This variant of the product description component has an image.
export const VariantB = ({
  showNewTag,
  productTitle,
  productDescription,
  buttonVariant,
  newTagVariant,
  itemImage,
  newTagText,
  showButton,
  onClick,
  productSlug,
  titleColorDefault,
  descriptionColor,
}) => (
  <div className={styles.container}>
    {itemImage && (
      <div className={styles.b_product_image_container}>
        <img src={itemImage} alt="itemImage" className={styles.product_image} />
      </div>
    )}

    <div className={styles.b_text_container}>
      <NewTag
        newTagVariant={newTagVariant}
        showNewTag={showNewTag}
        newTagText={newTagText}
      />
      <ProductTitle
        title={productTitle}
        titleColorDefault={titleColorDefault}
      />
      <p className={descriptionColor ? styles.description: styles.description_sec}>{productDescription}</p>
      {showButton && (
        <Button
          productSlug={productSlug}
          label="SEE PRODUCT"
          variant={buttonVariant}
          onClick={onClick}
        />
      )}
    </div>
  </div>
);

// Variant C: used on product feature Detailed page
// on the "YOU MAY ALSO LIKE" section.
export const VariantC = ({
  //showNewTag,
  productTitle,
  //productDescription,
  buttonVariant,
  // newTagText,
  itemImage,
  // newTagDefault,
  showButton,
  onClick,
  titleColorDefault,
  productSlug,
}) => (
  <div className={styles.c_container}>
    <div className={styles.c_product_image_container}>
      <img
        src={itemImage}
        alt="itemImage"
        className={styles.product_image_vc}
      />
    </div>

    <div className={styles.c_text_container}>
      {/* <NewTag newTagText={newTagText} showNewTag={showNewTag} newTagDefault={newTagDefault}/> */}
      <ProductTitle
        title={productTitle}
        titleColorDefault={titleColorDefault}
      />
      {/* <p className={styles.description}>{productDescription}</p> */}
      <div className={styles.c_button_wrap}>
          {showButton && (
        <Button
          productSlug={productSlug}
          label="SEE PRODUCT"
          variant={buttonVariant}
          onClick={onClick}
        />
      )}
      </div>
    
    </div>
  </div>
);

export const ProductDescription = ({
  newTagText = "NEW PRODUCT",
  productTitle = "XX99 MARK II HEADPHONES",
  productDescription = "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
  showNewTag = false,
  newTagVariant,
  showButton = true,
  buttonVariant,
  variant,
  itemImage = product_1_image,
  productSlug,
  onClick,
  descriptionColor = false,
  titleColorDefault,
}) => {
  

  switch (variant) {
    case "A":
      return (
        <VariantA
          showNewTag={showNewTag}
          productTitle={productTitle}
          productDescription={productDescription}
          buttonVariant={buttonVariant}
          newTagText={newTagText}
          newTagVariant={newTagVariant}
          onClick={onClick}
          showButton={showButton}
          productSlug={productSlug}
          descriptionColor={descriptionColor}
          itemImage={itemImage}
          titleColorDefault={titleColorDefault}
        />
      );
    case "B":
      return (
        <VariantB
          showNewTag={showNewTag}
          productTitle={productTitle}
          productDescription={productDescription}
          buttonVariant={buttonVariant}
          newTagText={newTagText}
          newTagVariant={newTagVariant}
          itemImage={itemImage}
          onClick={onClick}
          showButton={showButton}
          productSlug={productSlug}
          descriptionColor={descriptionColor}
          titleColorDefault={titleColorDefault}
        />
      );
    case "C":
      return (
        <VariantC
          //showNewTag={showNewTag}
          productTitle={productTitle}
          //productDescription={productDescription}
          buttonVariant={buttonVariant}
          //newTagText={newTagText}
          //newTagDefault={newTagDefault}
          itemImage={itemImage}
          onClick={onClick}
          showButton={showButton}
          productSlug={productSlug}
        />
      );
    default:
      return null;
  }
  
};
