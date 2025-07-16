
import { useState } from "react";
import {FaFacebookF, FaTwitter,FaInstagram} from "react-icons/fa";
function Footer() {
  const [contact, _setContact] = useState([{
    icon: "icon-email.svg", text: "+2345678987"
  }, {
    icon: "icon-phone.svg", text: "example@flyo.com"
    }]);
  const [links, _setLinks] = useState([
    
    "About Us"
  ,   "Contact Us"
    , "Terms",
     "Jobs"
    , "Press"
    , "Privacy"
 , "Blog"
  ]);
  const [SocialIcons] = useState([
    "facebook",
    "twitter",
    "instagram",

    


  ]);
  return (
    <section className="bg-[#0c1524]  pt-[320px] md:pt-[200px] pb-[100px] text-white">
      
      <div className="container">
        <a href="/">
          <img src="/src/assets/images/logo.svg" alt="logo-img"
        className="w-[175px] h-[66px] object-contain " />
      
        </a>
        <div className="mt-[30px] flex justify-between flex-wrap  flex-col md:flex-row  gap-[30px] md:gap-0">
          <div className="flex max-w-full w-[340px]  items-start gap-[15px] ">
            <img src="/src/assets/images/icon-location.svg" alt="location-img"
            className="w-[18px] h-[18px] object-contain" />
            <p className="text-sm font-normal tracking-[0.8px] ">Lorem ipsum dolor sit amet, consectetur  adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et
             .</p>
             
          </div>
          <div>
            {contact.map((item) => (
  
              <div key={item.text} className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0">

                <img src={`/src/assets/images/${item.icon}`} alt="icon"
                  className="w-[18px] h-[18px] object-contain" />
                <p>{item.text}</p>
              </div>)) } 
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px] ">

            {links.map((link) => (
            <li key={link}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="hover:text-primary
               transition-colors duration-200 text-base ">{link}</a>
            </li>
            ))}
          </ul>
          <ul className=" flex  gap-[15px] justify-center w-full md:w-auto "> 
            {SocialIcons.map((item) => (
              <li key={item} className="inline-block">
                
                <a href="/" className="group ">
                  <div className="w-[40px] h-[40px] element-center border border-white  rounded-full ">
                    {item === "facebook" ? <FaFacebookF className="hover-icon" /> : item === "twitter" ?
                      <FaTwitter className="hover-icon" />
                      : item === "instagram" &&
                      <FaInstagram className="hover-icon" />}
                  </div>
                </a>
                 </li>

              
            ))}
          </ul>
        </div>

      </div>
   </section>
  )
}

export default Footer
