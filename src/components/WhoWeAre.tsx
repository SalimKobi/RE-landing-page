import { FaHome } from "react-icons/fa";

const WhoWeAre = () => {
  return (
    <main className="container mx-auto lg:flex px-3 mb-12 lg:pt-0 pt-8">
      <div className="lg:w-2/5">
        <p className="text-[#660000] md:text-xl text-lg font-medium">
          Why Choose Tantolu Real Estate?
        </p>
        <h1 className="lg:text-4xl text-2xl font-medium py-3">
          Assisting individual in locating the appropriate real estate
        </h1>
        <p className="lg:w-4/5 text-[#a5a5a5]">
          Tantolu Real Estate develops quality properties and offers expert
          facility management. We connect buyers, sellers, and renters with the
          right homes while ensuring lasting value through professional
          management services.
        </p>
        <div className="lg:block hidden">
          <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
            <FaHome className="text-4xl text-[#04c37] w-1/3" />
            <span>
              <h1 className="text-[#0c3f37] text-lg font-medium">
                Comprehensive Real Estate Services
              </h1>
              <p className="text-[#a5a5a5] w-4/5">
                Our services cover everything from property buying and selling
                to ongoing facility management, ensuring your property remains
                in top shape while maintaining its value.
              </p>
            </span>
          </div>
          <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
            <FaHome className="text-4xl text-[#04c37] w-1/3" />
            <span>
              <h1 className="text-[#0c3f37] text-lg font-medium">
                Expert Property Management
              </h1>
              <p className="text-[#a5a5a5] w-4/5">
                Our facility management services take the hassle out of property
                ownership. We handle everything from maintenance and repairs to
                tenant management and security, ensuring peace of mind for
                property owners and residents.
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="lg:w-3/5 flex items-end gap-4 lg:mt-0 mt-12 lg:h-auto h-[30rem]">
        <img
          src="/assets/img-blank.PNG"
          alt=""
          className="rounded-3xl w-1/2 h-4/5 shadow-md object-cover"
        />
        <div className="w-1/2 h-4/5 flex flex-col gap-4 relative -top-20">
          <img
            src="/assets/img-blank.PNG"
            alt=""
            className="w-full h-3/5 rounded-3xl shadow-md object-cover"
          />
          <img
            src="/assets/img-blank.PNG"
            alt=""
            className="w-full h-2/5 rounded-3xl shadow-md object-cover"
          />
          <button className="bg-gradient-to-r from-[#660000] to-[#fe6f5e] rounded-full h-12 w-12 cursor-auto absolute -top-2 -right-2"></button>
        </div>
      </div>
      <div className="lg:hidden block pt-4 py-16">
        <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
          <FaHome className="text-4xl text-[#04c37] w-1/3" />
          <span>
            <h1 className="text-[#0c3f37] text-lg font-medium">Lorem</h1>
            <p className="text-[#a5a5a5] w-4/5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur velit perspiciatis impedit dolore fugiat tempora
              officia sapiente dignissimos
            </p>
          </span>
        </div>
        <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
          <FaHome className="text-4xl text-[#04c37] w-1/3" />
          <span>
            <h1 className="text-[#0c3f37] text-lg font-medium">Lorem</h1>
            <p className="text-[#a5a5a5] w-4/5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur velit perspiciatis impedit dolore fugiat tempora
              officia sapiente dignissimos
            </p>
          </span>
        </div>
      </div>
    </main>
  );
};

export default WhoWeAre;
