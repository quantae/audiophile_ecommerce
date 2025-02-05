/* eslint-disable react/prop-types */
//import React from 'react'
import { Logo, NavList } from "../../feature/navigation_bar/navbar/Navbar";
import styles from "./footer.module.css";
import FB from "../../assets/icons/facebook.svg?react";
import IG from "../../assets/icons/instagram.svg?react";
import Twitter from "../../assets/icons/twitter.svg?react";

export const SocialMedia = () => (
  <div className={styles.social_media}>
    <FB />
    <Twitter />
    <IG />
  </div>
);

export const FooterText = ({
  footerText = "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.",
}) => (
  <div className={`${styles.footer_text}`}>
    <p className={styles.footer_text_p}>{footerText}</p>
  </div>
);

const CopyRightText = () => (
  <p className={styles.copyright}>© Copyright 2021. All rights reserved</p>
);

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.hr_line}></div>
      <div className={styles.footer_wrap}>
        <div className={styles.logo_navlist_footer}>
          <Logo />
          <div className={styles.footer_navlist}>
            <NavList />
          </div>
          
        </div>

        <FooterText />

        <div className={styles.logo_navlist_footer}>
          <CopyRightText />
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Footer;
