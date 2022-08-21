import imageCurrency from "../images/image-currency.jpg";
import imageRestaurant from "../images/image-restaurant.jpg";
import imagePlane from "../images/image-plane.jpg";
import imageConfetti from "../images/image-confetti.jpg";

const theArticles = [
  {
    img: imageCurrency,
    alt: "image-currency",
    writer: "By Claire Robinson",
    h3: "Receive money in any currency with no fees",
    paragraph:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    img: imageRestaurant,
    alt: "image-restaurant",
    writer: "By Wilson Hutton",
    h3: "Treat yourself without worrying about money",
    paragraph:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    img: imagePlane,
    alt: "image-plane",
    writer: "By Wilson Hutton",
    h3: "Take your Easybank card wherever you go",
    paragraph:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
  {
    img: imageConfetti,
    alt: "image-confetti",
    writer: "By Claire Robinson",
    h3: "Our invite-only Beta accounts are now live!",
    paragraph:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …",
  },
];

const Articles = () => {
  return (
    <div className="mt-40 px-5 md:mt-64 max-w-[1270px] md:m-auto">
      <h2 className="font-Public-Sans text-4xl text-center md:text-left text-Dark-Blue">
        Latest Articles
      </h2>

      <div className="md:flex gap-10">
        {theArticles.map((article, index) => (
          <div key={index} className={`mt-10 rounded-lg overflow-hidden`}>
            <div className="w-full overflow-hidden">
              <img
                className="w-full md:h-[150px]"
                src={article.img}
                alt={article.alt}
              />
            </div>

            <div className="mt-7 px-7">
              <p className="text-xs font-medium font-Public-Sans text-Grayish-Blue">
                {article.writer}
              </p>
              <h3 className="font-Public-Sans text-base cursor-pointer hover:text-Link transition-all text-Dark-Blue font-medium mt-3">
                {article.h3}
              </h3>
              <p className="mt-3 font-Public-Sans text-sm text-Grayish-Blue font-medium">
                {article.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
