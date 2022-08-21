import iconOnline from "../images/icon-online.svg";
import iconBudgeting from "../images/icon-budgeting.svg";
import iconOnboarding from "../images/icon-onboarding.svg";
import iconApi from "../images/icon-api.svg";

const theBenefits = [
  {
    img: iconOnline,
    h3: "Online Banking",
    paragraph:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    alt: "icon-online",
  },
  {
    img: iconBudgeting,
    h3: "Simple Budgeting",
    paragraph:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    alt: "icon-budgeting",
  },
  {
    img: iconOnboarding,
    h3: "Fast Onboarding",
    paragraph:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    alt: "icon-onboarding",
  },
  {
    img: iconApi,
    h3: "Open API",
    paragraph:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    alt: "icon-api",
  },
];

const Benefits = () => {
  return (
    <div className="mt-40 px-5 max-w-[1270px] md:m-auto">
      <h2 className="font-Public-Sans md:text-left text-4xl text-Dark-Blue text-center">
        Why choose Easybank?
      </h2>
      <p className="font-Public-Sans text-sm md:text-base mt-5 md:text-left text-Grayish-Blue text-center font-medium">
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </p>

      <div className="mt-16 px-4 md:flex items-start gap-10">
        {theBenefits.map((benefit, index) => (
          <div key={index} className="mt-10">
            <img
              className="m-auto md:ml-0"
              src={benefit.img}
              alt={benefit.alt}
            />

            <div>
              <h3 className="font-Public-Sans md:text-left text-center text-xl mt-5 text-Dark-Blue font-medium">
                {benefit.h3}
              </h3>

              <p className="mt-5 font-Public-Sans md:text-left text-center text-Grayish-Blue text-sm font-medium">
                {benefit.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
