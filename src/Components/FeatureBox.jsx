import iconAnyFile from '../assets/images/icon-any-file.svg';
import iconAccessAnywhere from '../assets/images/icon-access-anywhere.svg';
import iconCollaboration from '../assets/images/icon-collaboration.svg';
import iconSecurity from '../assets/images/icon-security.svg';

const iconsMap = {
  "icon-any-file.svg": iconAnyFile,
  "icon-access-anywhere.svg": iconAccessAnywhere,
  "icon-collaboration.svg": iconCollaboration,
  "icon-security.svg": iconSecurity,
};

function FeatureBox({ title, icon, description }) {
  const imageSrc = iconsMap[icon];

  return (
    <div className="text-white element-center flex-col text-center">
      <img src={imageSrc} alt="icon-img" className="w-[80px] h-[80px] object-contain" />
      <h4 className="text-xl font-semibold my-[15px]">{title}</h4>
      <p className="font-normal text-sm">{description}</p>
    </div>
  );
}

export default FeatureBox;
