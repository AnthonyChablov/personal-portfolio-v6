import React from "react";
import ParagraphText from "@/components/Typography/ParagraphText/ParagraphText";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer data-testid="footer" className=" text-zinc-300 py-4">
      <div className=" text-center" role="content-info">
        <ParagraphText
          size="sm"
          text={`© ${currentYear} Created and built by Anthony Chablov`}
        />
      </div>
    </footer>
  );
};

export default Footer;
