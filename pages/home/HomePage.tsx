import { Player } from "@lottiefiles/react-lottie-player";
import AOS from "aos";
import Carousel from "../../components/carousel/Carousel";
import { useEffect } from "react";
import { Techart } from "../../components";


AOS.init({ duration: 1000 });

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
       <section id="container" className=" h-screen bg-gray-800 w-full">
         <div className="grid sm:grid-cols-1 md:grid-cols-1 grid-cols-2 h-screen items-center border-4 sm:border-0 md:border-0
          mx-10 z-10 bg-gray-800
          border-white transform rotate-12 sm:rotate-0 md:rotate-0">
           <div className="h-1/2" >
             <Player
               src="https://assets7.lottiefiles.com/packages/lf20_rhe84poa.json"
               background="transparent"
               speed={1}
               loop
               autoplay
             ></Player>
           </div>
           <div className="font-bold text-white sm:px-5">
            <h1 className="text-7xl sm:text-4xl" data-aos="slide-right" data-aos-once="true" data-aos-duration="500">
              ¡Hola! Soy <span className="text-orange-500">NICOLÁS</span>
            </h1>
            <h1 className="text-4xl sm:text-xl" data-aos="slide-left" data-aos-once="true" data-aos-duration="500">
              Desarrollador <span className="text-red-600">Front End</span>
            </h1>
          </div>
          </div>
        </section>

       <Techart />

      <article className="bg-gray-800 w-full py-3 mt-10 sm:mt-44 mb-20">
       <p className="text-xl sm:text-[20px] text-white font-semibold text-center mb-2 p-2">
            Las buenas ideas no se adoptan automáticamente. Se deben poner en práctica con valentía, paciencia y perseverancia.
       </p>
      </article>
      <h3
        className="text-[40px] sm:text-[25px] text-50px text-center font-bold my-36"
        data-aos="slide-up"
      >
        Porque....
      </h3>

      <article className="w-[70%] sm:w-3/5 sm:mt-24 sm:my-0 sm:mx-auto my-0 mx-auto font-bold text-center bg-orange-600 mt-20 p-14 sm:p-20 text-white rounded-tl-full rounded-br-full">
        <h1 className="text-6xl sm:text-2xl" data-aos="flip-left">
             EL JUEGO ES...
        </h1>
        <h1 className="text-6xl sm:text-2xl" data-aos="flip-right">
            CONSTANCIA
        </h1>
      </article>

      <div id="proyectos" className="mt-10 text-center">
        <h2 className="text-black text-[40px] sm:text-[25px] font-bold py-10 sm:my-10">
         Proyectos
        </h2>
      </div>

      <Carousel />
    </section>
  );
};


