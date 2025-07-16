import introImg from "../assets/images/illustration-intro.png";
import bgCurve from "../assets/images/bg-curvy-desktop.svg";

function Landing() {
  return (
    <section className="bg-[#1c2230]">
      <div className="container pt-[100px] pb-[50px]">
        <div className="flex-col element-center pt-[200px]">
          <div className="w-[750px] max-w-full">
            <img
              className="w-full h-fit"
              src={introImg}
              alt="Landing-img"
            />
          </div>

          <div className="text-white text-center">
            <h1 className="text-[30px] md:text-[40px] font-semibold md-[15px]">
              All Your Files in one Secure Location,
              <br />
              accessible Anywhere
            </h1>
            <p className="font-normal text-lg px-[15px] md:w-[600px] max-w-full mb-[30px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Odit modi et sint consequuntur dolorum, non perferendis,
              numquam doloremque ad corrupti perspiciatis?
            </p>
          </div>

          <a
            href="/"
            className="btn w-[280px] h-[60px] rounded-[30px] element-center font-medium"
          >
            Get started
          </a>
        </div>
      </div>

      <div className="w-full h-[200px]">
        <img src={bgCurve} alt="img" className="w-full h-full" />
      </div>
    </section>
  );
}

export default Landing;
