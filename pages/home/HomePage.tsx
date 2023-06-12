import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3,
  FaGitAlt,
} from "react-icons/fa";
import { useEffect } from "react";
import { Layout } from "../../components";
import { Player } from "@lottiefiles/react-lottie-player";
import AOS from "aos";


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
              <h1 className="text-7xl sm:text-4xl" data-aos="slide-right">
                Hii , I am <span className="text-orange-500">NICOLÁS</span>
              </h1>
              <h1 className="text-4xl sm:text-xl" data-aos="slide-left">
                Front End <span className="text-red-600">Developer</span>
              </h1>
            </div>
          </div>
        </section>
        {/* technologies */}

        <article className="mt-20">
          <h1
            className="text-4xl text-blue-800 font-bold text-center my-8"
            data-aos="slide-up"
          >
            Technologies I USE
          </h1>
          <div className="grid sm:grid-cols-1 grid-cols-3">
            <FaReact
              size={180}
              color="cyan"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaJsSquare
              size={180}
              color="green"
              className="w-full text-center mt-20 "
            />
            <FaHtml5
              size={180}
              color="yellow"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaCss3
              size={180}
              color="blue"
              className="w-full text-center mt-20"
            />
            <FaNodeJs
              size={180}
              color="green"
              className="w-full text-center mt-20 animate-bounce"
            />
            <FaGitAlt
              size={180}
              color="orangered"
              className="w-full text-center mt-20"
            />
          </div>
        </article>

        {/* React Buff */}

        <article className="my-20">
          <div className="text-center h-52 bg-primary">
            <h1 className="text-white font-bold text-4xl py-10 sm:my-10">
              Yes You Are Right...I am React Buff
            </h1>
          </div>

          <div className="sm:mx-5 sm:mt-2 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
            <div className="h-96" data-aos="zoom-in">
              <Player
                src="https://assets4.lottiefiles.com/packages/lf20_sSF6EG.json"
                background="transparent"
                speed={1}
                loop
                autoplay
              ></Player>
            </div>
            <p className="text-xl my-5 font-semibold sm:px-5 px-14 py-10">
              React is an open source Javascript library designed to create user
              interfaces with the goal of making it easy to develop single-page
              applications.
            </p>
          </div>
        </article>

        {/* Dev Stack Section */}

        <section className="my-20">
          <div className="text-center h-52 bg-orange-600">
            <h1 className="text-white font-bold text-4xl py-10">
              My DEV Stack
            </h1>
          </div>

          <div className="sm:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white">
            <div className="h-96" data-aos="zoom-in">
              <Player
                src="https://assets3.lottiefiles.com/packages/lf20_aptscmnx.json"
                background="transparent"
                speed={1}
                loop
                autoplay
              ></Player>
            </div>
            <div className="grid sm:grid-cols-1 grid-cols-3 p-5">
              <div>
                <h1 className="text-xl font-bold">Front End</h1>
                <hr />
                <p className="font-semibold mt-2 text-gray-400 ">HTML/CSS</p>
                <p className="font-semibold mt-2 text-gray-400">Javascript</p>
                <p className="font-semibold mt-2 text-gray-400">React</p>
              </div>

              <div className="text-center">
                <h1 className="text-xl font-bold">UI / UX</h1>
                <hr />
                <p className="font-semibold mt-2 text-gray-400">Tailwind</p>
                <p className="font-semibold mt-2 text-gray-400">Boostrap</p>
                <p className="font-semibold mt-2 text-gray-400">MUI</p>
              </div>

              <div className="text-right">
                <h1 className="text-xl font-bold">Other Technologies </h1>
                <hr />
                <p className="font-semibold mt-2 text-gray-400">Git</p>
                <p className="font-semibold mt-2 text-gray-400">Node JS</p>
                <p className="font-semibold mt-2 text-gray-400">Docker</p>
                <p className="font-semibold mt-2 text-gray-400">MySql</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dev Info */}
        <article>
          <h1 className="text-4xl sm:text-2xl text-gray-500 text-center font-bold">
            Who is Nicolás ?
          </h1>

          <div className="h-screen relative text-gray-800">
            <div className="h-full">
              <Player
                src="https://assets8.lottiefiles.com/packages/lf20_1krz51xr.json"
                background="transparent"
                speed={1}
                loop
                autoplay
              ></Player>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold">
                Hello...
                <hr />
                <pre className="text-xl sm:text-sm my-5 font-mont font-semibold">
                  {JSON.stringify(
                    {
                      name: "Nicolás Dume",
                      gender: "Male",
                      country: "ARGENTINA",
                    },
                    null,
                    2
                  )}
                </pre>
              </h1>
            </div>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export default Home;
