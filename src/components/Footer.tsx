import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import { TbHomeCheck } from "react-icons/tb";

const Footer = () => {
  return (
    <footer>
      <section className="flex flex-col bg-[#e6edeb] pt-8">
        <div className="container mx-auto lg:flex items-start justify-between pb-8">
          <div className="lg:flex justify-between px-3 w-full py-12 lg:text-left">
            <div className="lg:block flex flex-col items-center justify-center">
              <span className="flex items-center gap-x-2">
                <button className="bg-[#660000] text-white rounded-full w-14 h-14">
                  <TbHomeCheck className="w-1/2 h-1/2 m-auto" />
                </button>
                <p className="font-medium text-xl">Tantolu</p>
              </span>
              <p className="xl:text-base text-sm py-4 w-4/5 lg:text-left text-center">
                Bengkulu, Indonesia
              </p>
              <span className="flex items-center gap-x-2 pt-4">
                <FaPhone />
                <p>088888888888</p>
              </span>
              <span className="flex items-center gap-x-2 pt-2">
                <FaEnvelope />
                <p>example@gmail.com</p>
              </span>
            </div>

            <div className="lg:block flex flex-col items-center justify-center lg:text-left text-center">
              <p className="font-semibold lg:mb-4 lg:mt-0 mt-6 uppercase">
                Quick Links
              </p>
              <ul>
                <li className="xl:text-base text-sm mt-2 cursor-pointer">
                  Home
                </li>
                <li className="xl:text-base text-sm mt-2 cursor-pointer">
                  About
                </li>
                <li className="xl:text-base text-sm mt-2 cursor-pointer">
                  Listings
                </li>
                <li className="xl:text-base text-sm mt-2 cursor-pointer">
                  Blogs
                </li>
                <li className="xl:text-base text-sm mt-2 cursor-pointer">
                  Become an Agent
                </li>
              </ul>
            </div>

            <div className="lg:block flex flex-col items-center justify-center lg:text-left text-center">
              <p className="font-semibold lg:mb-4 lg:mt-0 mt-6 uppercase">
                Discovery
              </p>
              <ul>
                <li className="xl:text-base text-sm mt-2 cursor-pointer">
                  Canada
                </li>
                <li className="xl:text-base text-sm mt-2 cursor-pointer">
                  United States
                </li>
                <li className="xl:text-base text-sm mt-2 cursor-pointer">
                  Germany
                </li>
                <li className="xl:text-base text-sm mt-2 cursor-pointer">
                  Africa
                </li>
                <li className="xl:text-base text-sm mt-2 cursor-pointer">
                  India
                </li>
              </ul>
            </div>

            <div className="lg:w-1/3">
              <p className="font-semibold lg:mb-4 lg:mt-0 mt-6 uppercase lg:text-left text-center lg:pb-0 pb-2">
                Follow us on
              </p>

              <span className="text-[#0ca49a] flex items-center gap-4 text-2xl lg:justify-normal">
                <FaLinkedin className="cursor-pointer" />
                <FaFacebookF className="cursor-pointer" />
                <FaInstagram className="cursor-pointer" />
              </span>
            </div>
          </div>
        </div>
      </section>
      
    </footer>
  );
};

export default Footer;
