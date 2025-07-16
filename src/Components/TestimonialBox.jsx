import profile1 from "../assets/images/profile-1.jpg";
import profile2 from "../assets/images/profile-2.jpg";
import profile3 from "../assets/images/profile-3.jpg";

const imagesMap = {
  "profile-1.jpg": profile1,
  "profile-2.jpg": profile2,
  "profile-3.jpg": profile3,
};

function TestimonialBox({ name, image, desc, position }) {
  return (
    <div className="text-white bg-[#21293c] p-[30px] rounded-[5px] shadow-[8px_8px_1px_8px_#1c202c] ">
      <p className="text-sm font-normal tracking-[0.8px] mb-[30px]">{desc}</p>
      <div className="flex items-center gap-[15px] mb-[30px]">
        <img
          src={imagesMap[image]}
          alt="profile"
          className="w-[50px] h-[50px] rounded-full object-contain"
        />
        <div>
          <strong className=" block mb-[5px]">{name}</strong>
          <p className="font-normal text-sm">{position}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialBox;
