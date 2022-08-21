import bgIntroMobile from "../images/bg-intro-mobile.svg";
import bgIntroDesktop from "../images/bg-intro-desktop.svg";
import imageMockups from "../images/image-mockups.png";

const Home = () => {
  return (
    <div className="mt-16 max-w-[1270px] md:m-auto md:flex md:flex-row-reverse md:mt-20 items-center">
      <div className="w-full md:overflow-hidden md:min-w-[500px]">
        <img
          className="w-full md:hidden block"
          src={bgIntroMobile}
          alt="bg-intro-mobile"
        />
        <img
          className="md:block hidden -translate-y-32 translate-x-20"
          src={bgIntroDesktop}
          alt="bg-intro-desktop"
        />
        <img
          className="absolute -top-8 md:-mt-[650px] md:translate-x-32 md:relative"
          src={imageMockups}
          alt="image-mockups"
        />
      </div>

      <div className="px-5 md:w-max md:pt-5">
        <h1 className="font-Public-Sans md:text-left text-[40px] text-Dark-Blue text-center">
          Next generation digital banking
        </h1>
        <p className="font-Public-Sans md:text-left md:text-base text-sm font-medium text-center text-Grayish-Blue mt-3">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="mt-7 px-9 py-3 md:ml-0 shdw transition-all text-sm font-semibold text-Light-Grayish-Blue m-auto block font-Public-Sans bg-gradient-to-r from-Lime-Green to-Bright-Cyan rounded-full">
          Request Invite
        </button>
      </div>
    </div>
  );
};

export default Home;
