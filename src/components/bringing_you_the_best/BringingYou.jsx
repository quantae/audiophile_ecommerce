/* eslint-disable react/prop-types */
//import React from 'react'
import styles from "./bringing_you.module.css";
import displayImage from '../../../resources/assets/shared/mobile/image-best-gear.jpg'

const BringingYou = ({image = displayImage}) => {
  return (
    <div className={`${styles.container} text-center`}>
      <div>

        <h4>BRINGING YOU THE <span style={{color:'var(--clr-primary'}}>BEST</span> AUDIO GEAR</h4>
        <p style={{lineHeight:'1.8'}}>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </div>
        <img src={image} alt="dispaly" style={{borderRadius:'var(--bd-radius)'}}/>
        
      
    </div>
  )
}

export default BringingYou
