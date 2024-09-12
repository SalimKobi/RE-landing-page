import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdMaximize } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import Marquee from "react-fast-marquee";
import { FaPlus } from "react-icons/fa";

const responsive = {
  module: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 1,
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 1,
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //   },
};

const RealEstate = () => {
  const CustomDot = ({ onClick, active }) => (
    <li
      className={`text-5xl ${active ? "text-[#0c4f37]" : "text-white"}`}
      onClick={() => onClick()}
    >
      <MdMaximize />
    </li>
  );

  const images = [
    "/assets/img-blank.PNG",
    "/assets/img-blank.PNG",
    "/assets/img-blank.PNG",
    "/assets/img-blank.PNG",
    "/assets/img-blank.PNG",
  ];

  return (
    <main className="mb-12">
      <div className="bg-gradient-to-t from-[#fe6f5e] to-[#ffff] rounded-[560px] rounded-t-none">
        <div className="container mx-auto px-3 lg:flex justify-between items-center lg:h-screen">
          <div className="lg:w-2/5">
            <p className="text-[#660000] md:text-2xl text-lg font-medium">
              Welcome to Tantolu Real Estate
            </p>
            <h1 className="lg:text-4xl text-3xl font-medium pt-3 pb-8">
              Your Trusted Partner in Property Development, Sales, and
              Management
            </h1>
            <p className="text-[#000] lg:text-lg text-sm pb-8">
              At Tantolu Real Estate, we don’t just develop properties—we manage
              them with care and connect people to their perfect homes. Whether
              you’re looking to buy, sell, or manage your property, our expert
              team is here to provide personalized, comprehensive solutions
              tailored to your needs.
            </p>

            {/* <Carousel
              className="z-20"
              swipeable={true}
              draggable={false}
              responsive={responsive}
              showDots
              arrows
              ssr={true}
              infinite
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              customDot={<CustomDot />}
            >
              {images.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={img} className="rounded-2xl" />
                </div>
              ))}
            </Carousel> */}
            <div className="justify-center lg:flex lg:mt-4 gap-x-8 lg:px-0 px-3">
              <div className="bg-white rounded-full py-4 lg:px-8 flex items-center justify-center gap-x-4 shadow-2xl w-2xl">
                <img
                  src="/assets/img-blank.PNG"
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <p className="w-36 md:text-sm font-medium">
                  12k+ Happy Customers
                </p>
              </div>
              <div className="bg-white rounded-full py-4 lg:px-8 px-3 flex items-center justify-center gap-x-4 shadow-2xl lg:mt-0 mt-4">
                <img
                  src="/assets/img-blank.PNG"
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <p className="md:text-sm font-medium">
                  200+ available properties
                </p>
              </div>
            </div>
          </div>
          <form className="bg-white shadow-2xl rounded-3xl py-8 lg:w-1/3 relative lg:mt-0 mt-12">
            <div className="flex justify-between border-b border-[#aaaaaa] h-12 lg:px-8 px-3">
              <button
                type="button"
                className="w-1/2 text-[#808080] focus:border-b-2 focus:text-[#0ca39a] focus:border-[#0ca39a] cursor-pointer"
              >
                For Sale
              </button>
              <button
                type="button"
                className="w-1/2 text-[#808080] focus:border-b-2 focus:text-[#0ca39a] focus:border-[#0ca39a] cursor-pointer"
              >
                For Rental
              </button>
            </div>
            <div className="py-12 flex flex-col gap-8 lg:px-12 px-4">
              <input
                type="text"
                placeholder="Bengkulu"
                className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5] px-6"
              />
              <select className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5] px-6">
                <option value="">Select Property Type</option>
              </select>
              <select className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5] px-6">
                <option value="">Select Rooms</option>
              </select>

              <button
                type="button"
                className="w-full flex justify-center items-center gap-x-2 rounded-full h-14 text-white bg-[#660000]"
              >
                <IoSearch /> Request property
              </button>
            </div>
            <button className="bg-gradient-to-r from-[#660000] to-[#fe6f5e] rounded-full h-12 w-12 cursor-auto absolute -top-2 -right-2"></button>
          </form>
        </div>
      </div>
      {/* <div className="lg:hidden block container mx-auto px-3 py-8">
        <span className="lg:dlex items-end gap-x-60 lg:text-left text-center">
          <button className="lg:block hidden bg-gradient-to-r from-[#8bd3ce] to-[#6ff9f9]  rounded-full h-12 w-12 cursor-auto"></button>
          <p className="text-[# a5a5a5]">Trusted by 100+ companies</p>
        </span>
        <div className="py-12">
          <Marquee>
            <img src="/assets/img-blank.PNG" alt="" className="mr-4 h-8" />
            <img src="/assets/img-blank.PNG" alt="" className="mr-4 h-8" />
            <img src="/assets/img-blank.PNG" alt="" className="mr-4 h-8" />
            <img src="/assets/img-blank.PNG" alt="" className="mr-4 h-8" />
            <img src="/assets/img-blank.PNG" alt="" className="mr-4 h-8" />
            <img src="/assets/img-blank.PNG" alt="" className="mr-4 h-8" />
          </Marquee>
        </div>
      </div> */}

      {/* <div className="lg:block hidden container mx-auto px-3 py-16">
        <span className="lg:flex items-end gap-x-60 lg:text-left text-center">
          <button className="lg:block hidden bg-gradient-to-r from-[#8bd3ce] to-[#6ff9f9]  rounded-full h-12 w-12 cursor-auto"></button>
          <p className="text-[# a5a5a5]">Trusted by 100+ companies</p>
        </span>
        <div className="py-12">
          <Marquee>
            <img src="/assets/img-blank.PNG" alt="" className="mr-16 h-8" />
            <img src="/assets/img-blank.PNG" alt="" className="mr-16 h-8" />
            <img src="/assets/img-blank.PNG" alt="" className="mr-16 h-8" />
            <img src="/assets/img-blank.PNG" alt="" className="mr-16 h-8" />
            <img src="/assets/img-blank.PNG" alt="" className="mr-16 h-8" />
            <img src="/assets/img-blank.PNG" alt="" className="mr-16 h-8" />
          </Marquee>
        </div>
      </div> */}
    </main>
  );
};

export default RealEstate;
