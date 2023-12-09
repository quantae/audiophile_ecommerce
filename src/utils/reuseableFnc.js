// import speaker from  '../../assets/product_assets/home/mobile/image-speaker-zx9.png'
// import earphones from '../../assets/product_assets/product-yx1-earphones/mobile/image-category-page-preview.jpg';
// import headphones from '../../assets/product_assets/no-background/headphone.png';
import speaker from '../assets/product_assets/home/mobile/image-speaker-zx9.png'
import earphones from '../assets/product_assets/product-yx1-earphones/mobile/image-category-page-preview.jpg';
import headphones from '../assets/product_assets/no-background/headphone.png';
import productData from '../assets/data/data.json'

/**
 * 
 * @returns {object} - returns an object with the products as the value
 */
export const getProductData = () => {
  return productData;
}
/**
 * 
 * @returns {object} - returns an object with the category 
 * as the key and the images associated with that category
 *  as the value
 */
export const getCategoryImages = () => {
  return {
    'HEADPHONES': headphones,
    'SPEAKERS': speaker,
    'EARPHONES': earphones,
  };
};

/**
 * 
 * @param {*} data - the data to be filtered
 * @returns - returns an array of unique category titles
 */
export const getCategoryTitles = (data) => {
  return data.reduce((unique, product) => {
    return unique.includes(product.category.toUpperCase())
    ? unique : [...unique, product.category.toUpperCase()];
  }, []);
}

/**
 * 
 * @param {*} data - the data to be filtered
 * @param {*} category - the category to be filtered. provided by useParams.
 * @returns 
 */
export const getProductsByCategory = (data, category) => {
  return data.filter(product => product.category.toLowerCase() === category);
}

export const getProductsBySlug = (data, slug) => {
  return data.filter(product => product.slug.toLowerCase() === slug);
}



// const categoryTitle = data.reduce((unique, product) =>  {
//   return unique.includes(product.category.toUpperCase()) 
//   ? unique : [...unique, product.category.toUpperCase()];
// }, []);