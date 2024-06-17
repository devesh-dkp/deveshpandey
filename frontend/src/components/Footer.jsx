import React from "react";

function Footer() {
  return (
    <>
      <div className="w-full border-t border-gray-300"></div>
      {/* Horizontal Separator */}
      <footer className="flex justify-center items-center py-2 bg-white">
        <p className="text-xl text-gray-700">
          Copyright &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/devesh-dkp"
            className="text-blue-500 hover:text-blue-700"
          >
            Devesh Kumar Pandey
          </a>
          {". "}
        </p>
      </footer>
    </>
  );
}

export default Footer;
