import React from "react";
import ParagraphText from "../Text/ParagraphText";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" text-zinc-300 py-4">
      <div className=" text-center">
        <ParagraphText
          size="sm"
          text={`© ${currentYear} Created and built by Anthony Chablov`}
        />
      </div>
    </footer>
  );
};

export default Footer;
