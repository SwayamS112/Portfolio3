import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-4 text-center text-sm text-gray-600 dark:text-gray-400">
      © {new Date().getFullYear()} Swayam Sood. All rights reserved.
    </footer>
  );
};

export default Footer;
