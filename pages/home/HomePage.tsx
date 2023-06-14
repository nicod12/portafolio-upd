import { useEffect } from "react";
import { Contact, Layout, TechItems } from "../../components";
import { Player } from "@lottiefiles/react-lottie-player";
import AOS from "aos";
import Carousel from "../../components/carousel/Carousel";





AOS.init({ duration: 1000 });
const Home = () => {
  useEffect(() => {;
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <main>
        {/* intro section */}
        <section className="h-screen bg-gray-800">
          <div
            className="grid sm:grid-cols-1 grid-cols-2 h-screen items-center border-4 sm:border-0
          mx-10 z-10 bg-gray-800
          border-white transform rotate-12 sm:rotate-0"
          >
            <div className="h-1/2">
              <Player
                src="https://assets7.lottiefiles.com/packages/lf20_rhe84poa.json"
                background="transparent"
                speed={1}
                loop
                autoplay
              ></Player>
            </div>

            <div className="font-bold text-white sm:px-5">
              <h1 className="text-7xl 2xl:text:[90px] sm:text-4xl sm:w-auto" data-aos="slide-right">
                Hii , I am <span className="text-orange-500">NICOLÁS</span>
              </h1>
              <h2 className="text-4xl 2xl:text[60px] sm:text-xl sm:w-auto" data-aos="slide-left">
                Front End <span className="text-red-600">Developer</span>
              </h2>
            </div>
          </div>
        </section>
        {/* technologies */}
          <TechItems />


          
        <article className="bg-gray-800 py-2 mt-44 mb-20">
          <p className="text-xl text-white semi-bold text-center mb-2">
              Good ideas are not adopted automatically. They must be driven into
              practice with corageous patience
          </p>
        </article>
          <h3
            className="text-4xl 2xl:text-[50px] text-center font-bold mt-5"
            data-aos="slide-up"
          >
            Because
          </h3>

        <article className="font-bold text-center bg-orange-600 mt-20 mx-20 sm:p-10 p-20 text-white rounded-tl-full rounded-br-full sm:mx-5">
          <h1 className="text-8xl sm:text-2xl" data-aos="flip-left">
            THE GAME IS...
          </h1>
          <h1 className="text-8xl sm:text-2xl" data-aos="flip-right">
            CONSISTANCY
          </h1>
        </article>

        {/*Projects*/} 
        <div className="my-28 text-center">
          <h2 className="text-black  text-4xl 2xl:text-[50px] font-bold py-10 sm:my-10">
                Projects
          </h2>
        </div>

        <Carousel />
      
        {/* Dev contact */}
        <Contact />
       
      </main>
    </Layout>
  );
};

export default Home;
