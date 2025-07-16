
import React, { useState } from "react";
import TestimonialBox from "./TestimonialBox";

function Testimonials() {
    const [testData, _setTestData] = useState([{
        id: 1,
        image: "profile-1.jpg",
        desc: "Fylo has changed the way I work. The ability to  so easy to work with my colleagues, no matter where they are. access my files from anywhere has been a game-changer for my productivity.",
        position: "CEO, Company A",
        name: "Alice Johnson",

        
    },
    {
            id: 2,
        image: "profile-2.jpg",
        desc: "The security features give me peace of mind.  so easy to work with my colleagues, no matter where they are. I can collaborate with my team without worrying about data breaches.",
            position: "CTO, Company B",
            name: "Bob Smith",
        },
    {
         id: 3,
        image: "profile-3.jpg",
        desc: "Fylo's real-time collaboration tools have made it  so easy to work with my colleagues, no matter where they are. so easy to work with my colleagues, no matter where they are.",
            position: "CFO, Company C",
            name: "Charlie Brown",
        }
    
    
    
    
        ]);
    return <section className="pb-[350px]">
       <div className="container relative ">
            <div className="absolute top-[-35px] left-[20px]">
                <img src="/src/assets/images/bg-quotes.png" alt="quote" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] relative z-10">
                {testData.map((item) => (
                    <TestimonialBox
                        key={item.id}
                        desc={item.desc}
                        image={item.image}
                        name={item.name}
                        position={item.position} />
                ))}

            </div>
    </div>
        
  </section>
   
  
}

export default Testimonials
