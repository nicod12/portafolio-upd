import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3,
  FaGitAlt,
} from "react-icons/fa";


const Techart = () => {
  return (
    <article className="mt-20">
    <h1
      className="text-4xl text-blue-800 font-bold text-center my-8"
      data-aos="slide-up"
    >
      Tecnologías que uso
    </h1>
    <div className="grid sm:grid-cols-1 grid-cols-3 sm:text-[15px]">
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
  )
}

export default Techart;
