import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaExternalLinkSquareAlt
} from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="h-44 sm:h-6 mt-36">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1b2a37"
            fill-opacity="1"
            d="M0,96L288,32L576,224L864,32L1152,96L1440,32L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
          ></path>
        </svg>
      </div>
      <footer className="bg-gray-800 w-screen flex justify-center">
        <div className="sm:w-full w-1/2">
          <div className="p-10 font-mont text-center">
            <p className="text-gray-50 pb-5 text-[15px] 2xl:text-[25px] 3xl:text-[25px]">Designed and Developed By</p>
            <div className="h-1 border-2 border-white border-dotted"></div>

            <div className="flex text-white w-full justify-center sm:gap-16 md:gap-16 gap-32 py-4 2xl:text-[25px] 3xl:text-[25px]">
              <a href="https://www.linkedin.com/in/nicol%C3%A1s-dume-11b652185/">
                  <FaLinkedin />
              </a>
              <a href="https://github.com/nicod12">
                <FaGithub />
              </a>
              <a href="http://linktr.ee/waitydev">
                <FaExternalLinkSquareAlt />
              </a>
              <a href="https://www.instagram.com/wait1dev/">
                <FaInstagram />
              </a>

              <a href="https://twitter.com/WaityDev">
                <FaTwitter />
              </a>
            </div>

            <div className="h-1 border-2 border-gray-50 border-dotted"></div>

            <p className="text-gray-50 text-[20px] 2xl:text-[30px] 3xl:text-[30px] my-2">Nicolás Dume</p>
          </div>
        </div>
      </footer>
    </>
  );
};


