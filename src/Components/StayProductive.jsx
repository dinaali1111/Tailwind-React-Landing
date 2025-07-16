import stayImg from "../assets/images/illustration-stay-productive.png";
import arrowIcon from "../assets/images/icon-arrow.svg";

function StayProductive() {
  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center pt-[100px] pb-[50px]">
        <div>
          <img
            src={stayImg}
            alt="stay-productive-img"
          />
        </div>
        <div className="text-white">
          <h3 className="font-medium text-[35px] leading-[50px]">
            Stay Productive,
            <br />
            Wherever You Are
          </h3>
          <div className="my-[15px] font-normal text-sm tracking-[0.8px]">
            <p className="mb-[15px]">
              Never let location be an issue when accessing your files.
              Securely share files and folders with friends, family and colleagues
              for live collaboration.
            </p>
            <p>
              Never let location be an issue when accessing your files.
              Securely share files and folders with friends, family and colleagues
            </p>
          </div>
          <a
            href="/"
            className="text-primary hover:text-[#42b0d1] transition-colors border-b-2 border-primary border-solid pb-[5px] flex items-center gap-[15px] duration-200 w-fit"
          >
            See how Fylo works
            <img
              src={arrowIcon}
              alt="icon-arrow"
              className="w-[20px] h-[20px] object-contain animate-[moveRight_1s_ease-in-out_infinite]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default StayProductive;
