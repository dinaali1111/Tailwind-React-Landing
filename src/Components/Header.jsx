//my-project/src/Components/Header.jsx
import  { useState, useEffect, useRef } from "react";
import logo from "../assets/images/logo.svg"; 

function Header() {
    const headerRef = useRef();
    useEffect(() => {
        window.addEventListener("scroll",() => {
            if (window.scrollY> 100) {
                headerRef.current.style.backgroundColor = "#0c1524";
                 headerRef.current.style.padding= "20px 0";
            } else {
                headerRef.current.style.backgroundColor = "transparent";
                headerRef.current.style.padding = "60px 0";
            }
        });
    }, []);
  const [links] = useState(["Feature", "Team", "Sign In"]);

    return (
      <header  ref={headerRef} className="pt-[60px] fixed top-0 left-0 w-full z-50  transition-all duration-200 ">
    <div className="container  flex items-center justify-between gap-[30px] sm:gap-[0] flex-col sm:flex-row">
      <a href="/">
        <img src={logo} alt="logo-img" />
      </a>
      <nav>
        <ul className="flex gap-[50px] items-center ">
          {links.map((link) => (
            <li key={link}>
                  <a href={`/${link.toLowerCase().replace}`} className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200 ">{link}</a>
            </li>
          ))}
        </ul>
      </nav>
            </div>
            </header>
  );
}

export default Header;