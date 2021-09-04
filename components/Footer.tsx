import React from "react";
import FooterElement from "../styles/FooterElement";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterElement>
      <p>&copy; Zeromountain {new Date().getFullYear()}</p>
    </FooterElement>
  );
};

export default Footer;
