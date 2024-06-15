import React from "react";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white px-4 py-2 flex justify-center items-center">
      <p>© {new Date().getFullYear()} Devesh Kumar Pandey</p>
    </footer>
  );
}

export default Footer;
