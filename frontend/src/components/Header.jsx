import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const links = [
    // { to: "/", text: "HOME" },
    { to: "/about", text: "ABOUT" },
    { to: "/projects", text: "PROJECTS" },
    { to: "/blogs", text: "BLOGS" },
    { to: "/contact", text: "CONTACT" },
    { to: "/comment", text: "COMMENT" },
  ];
  let len = links.length;
  return ( 
    // new header design with navigation links on the right side
    <div className="bg-white w-full shadow-md">
      <header className="flex justify-between items-center h-24 px-10 text-3xl font-bold bg-white text-black w-full"
        style={{ fontFamily: "kingthings Foundation" }}
      >
        <a href="/" className="hover:text-red-500">Devesh Kumar Pandey</a>
        <nav>
          <ul className="flex space-x-6">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  onClick={() => (window.location.href = link.to)}
                  className="text-lg text-indigo-800 font-semibold hover:text-red-500"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div className="w-full border-t border-gray-300"></div>
      {/* Horizontal Separator */}
    </div>
  );
  // return (
  //   <div className="bg-white w-full shadow-md">
  //     <header
  //       className="flex justify-center items-center h-24 px-10 text-3xl font-bold bg-white text-black w-full"
  //       style={{ fontFamily: "kingthings Foundation" }}
  //     >
  //       <a href="/">Devesh Kumar Pandey</a>
  //     </header>
  //     <div className="flex pt-2 pb-10 justify-center w-full">
  //       <div className="absolute bg-white rounded-lg justify-center">
  //         <ul className="flex flex-row justify-center grid-cols-2 my-auto space-x-4">
  //           {
  //             // write links separated by | and turns red on hover
  //             links.map((link, index) => (
  //               <li key={index}>
  //                 <Link
  //                   onClick={() => (window.location.href = link.to)}
  //                   className="text-xl text-indigo-800	font-semibold hover:text-red-500"
  //                 >
  //                   {link.text}
  //                 </Link>
  //                 {index < len - 1 && <span className="text-2xl ml-5">|</span>}
  //               </li>
  //             ))
  //           }
  //         </ul>
  //       </div>
  //     </div>
  //     <div className="w-full border-t border-gray-300"></div>
  //     {/* Horizontal Separator */}
  //   </div>
  // );
}

export default Header;
