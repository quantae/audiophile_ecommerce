/* eslint-disable react/prop-types */
//import React from 'react'
import Button from '../button/Button'
import styles from './product_category_card.module.css';
import CardImageHeadphone from '../../../resources/assets/no-background/headphone.png';
import { useNavigate } from 'react-router-dom';



const ProductCategoryCard = ({title ="HEADPHONES", cardImage = CardImageHeadphone}) => {
  const navigate = useNavigate();

  /**
   * Handles the click event of the category button.
   * navigates to the category page of the clicked category.
   * uses the title prop to navigate to the correct category page.
   * @returns void
   */
  const handleClick = () => {
    navigate(`/categories/${title.toLowerCase()}`);
  }

  return (
    <div className={styles.container}>
        <div className={styles.logo_container}>
            <img src={cardImage} alt='item' className={styles.card_image}/>
        </div>
      <p>{title}</p>
      <Button label="SHOP" variant="borderless" icon={true} onClick={handleClick} />
    </div>
  )
}



export default ProductCategoryCard
