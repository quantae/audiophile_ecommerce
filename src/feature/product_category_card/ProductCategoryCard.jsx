/* eslint-disable react/prop-types */
//import React from 'react'
import Button from '../../components/button/Button'
import styles from './product_category_card.module.css';
import CardImageHeadphone from '../../../resources/assets/no-background/headphone.png';



const ProductCategoryCard = ({title ="HEADPHONES", cardImage = CardImageHeadphone, onClick, }) => {
 

  /**
   * Handles the click event of the category button.
   * navigates to the category page of the clicked category.
   * uses the title prop to navigate to the correct category page.
   * @returns void
   */
  // const handleClick = () => {
  //   navigate(`/categories/${title.toLowerCase()}`);
  // }
  

  return (
    <div className={styles.container}>
        <div className={styles.logo_container}>
            <img src={cardImage} alt='item' className={styles.card_image}/>
        </div>
      <p>{title}</p>
    
       <Button label="SHOP" variant="borderless" icon={true} onClick={onClick} /> 
   
      
    </div>
  )
}



export default ProductCategoryCard
