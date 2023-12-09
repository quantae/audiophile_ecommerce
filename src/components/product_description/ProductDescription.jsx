/* eslint-disable react/prop-types */
import styles from "./product_description.module.css";
import Button from "../button/Button";
//import imageSpeakerMobile from "../../../resources/assets/home/mobile/image-speaker-zx9.png";
//import bgImage from '../../../resources/assets/home/mobile/image-header.jpg'
import product_1_image from '../../../resources/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg';
import { useNavigate, useParams } from "react-router-dom";
import { getProductData, getProductsBySlug } from "../../utils/reuseableFnc";


export const ProductTitle = ({title, titleColorDefault}) => (
  <>
   <h4 className={titleColorDefault ? styles.title : styles.title_sec} >{title}</h4>
  </>
);

export const NewTag = ({newTag, showNewTag, newTagDefault}) => (
  <>
    {showNewTag && <h6 className={`${newTagDefault ? styles.new_tag_default : styles._new_tag_sec} ${styles.new_tag}`}>{newTag}</h6>}
  </>
)

// This variant of the product description component has no image.
export const VariantA = ({ 
  showNewTag, 
  productTitle, 
  productDescription, 
  buttonVariant, 
  newTag, 
  newTagDefault,
  showButton,
  onClick,
  titleColorDefault = true,
  productSlug,
}) => (
  <div className={styles.container}>  
        <div className={styles.text_container}>
          <NewTag newTag={newTag} showNewTag={showNewTag} newTagDefault={newTagDefault}/>
          <ProductTitle  title={productTitle} titleColorDefault={titleColorDefault}/>
          <p className={styles.description}>{productDescription}</p>
          {showButton && <Button productSlug={productSlug} label="SEE PRODUCT" variant={buttonVariant} onClick={onClick} />}
        </div>
      </div>
);

// This variant of the product description component has an image.
export const VariantB = ({ 
  showNewTag, 
  productTitle, 
  productDescription, 
  buttonVariant, 
  newTag, 
  itemImage, 
  newTagDefault,
  showButton,
  onClick,
  productSlug,
  titleColorDefault,
}) => (
  <div className={styles.container}>
   
      <div className={styles.product_image_container}>
        <img src={itemImage} alt="itemImage" className={styles.product_image} />
      </div>
   
    <div className={styles.text_container}>
      <NewTag newTag={newTag} showNewTag={showNewTag} newTagDefault={newTagDefault}/>
      <ProductTitle title={productTitle} titleColorDefault={titleColorDefault}/>
      <p className={styles.description}>{productDescription}</p>
      {showButton && <Button productSlug={productSlug} label="SEE PRODUCT" variant={buttonVariant} onClick={onClick}/>}
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
 // newTag, 
  itemImage, 
 // newTagDefault,
  showButton,
  onClick,
  titleColorDefault,
  productSlug
}) => (
  <div className={styles.container}>
      <div className={styles.product_image_container_vc}>
        <img src={itemImage} alt="itemImage" className={styles.product_image_vc} />
      </div>
   
    <div className={styles.text_container}>
      {/* <NewTag newTag={newTag} showNewTag={showNewTag} newTagDefault={newTagDefault}/> */}
      <ProductTitle title={productTitle} titleColorDefault={titleColorDefault}/>
      {/* <p className={styles.description}>{productDescription}</p> */}
      {showButton && <Button productSlug={productSlug} label="SEE PRODUCT" variant={buttonVariant} onClick={onClick}/>}
    </div>
  </div>
);

export const ProductDescription = ({
    newTag = "NEW PRODUCT",
    productTitle = "XX99 MARK II HEADPHONES",
    productDescription = "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    showNewTag = true,
    newTagDefault = true,
    showButton = true,
    buttonVariant,
    variant,
    itemImage = product_1_image,
    productSlug 
  }) => {
    const navigate = useNavigate();
   
    console.log('product productSlug', productSlug)
    //const product = getProductData().map((item) => item.slug.toLowerCase());
    /**
     * Handles the click event of the "see product" button.
     * on the product description component.
     */
    const handleClick = () => {
        navigate(`/product/${productSlug}`);
    }
  

    switch (variant) {
      case "A": 
        return <VariantA 
          showNewTag={showNewTag}
          productTitle={productTitle}
          productDescription={productDescription}
          buttonVariant={buttonVariant}
          newTag={newTag}
          newTagDefault={newTagDefault}
          onClick={() => handleClick(productSlug)}
          showButton={showButton}
          productSlug={productSlug}
          
        />
      case "B":
        return <VariantB 
          showNewTag={showNewTag}
          productTitle={productTitle}
          productDescription={productDescription}
          buttonVariant={buttonVariant}
          newTag={newTag}
          newTagDefault={newTagDefault}
          itemImage={itemImage}
          onClick={() => handleClick(productSlug)}
          showButton={showButton}
          productSlug={productSlug}
        />
      case "C":
        return <VariantC 
          //showNewTag={showNewTag}
          productTitle={productTitle}
          //productDescription={productDescription}
          buttonVariant={buttonVariant}
          //newTag={newTag}
          //newTagDefault={newTagDefault}
          itemImage={itemImage}
          onClick={() => handleClick(productSlug)}
          showButton={showButton}
          productSlug={productSlug}
        />
      default:
        return null;
    }
    // return (
    //   <div className={styles.container}>
       
        
    //     <div className={styles.text_container}>
    //       {showNewTag && <h6 className={styles._new_tag}>{newTag}</h6>}
    //       <ProductTitle title={productTitle}/>
    //       <p className={styles.description}>{productDescription}</p>
    //       <Button label="SEE PRODUCT" variant={buttonVariant}/>
    //     </div>
    //   </div>
    // );
  };

