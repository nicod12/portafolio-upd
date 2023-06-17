import {SiTypescript, SiCss3,SiHtml5, SiJavascript, SiNodedotjs, SiReact, SiLinux, SiTailwindcss, SiGit} from "react-icons/si"

const TechItems = () => {


  return (
    <>
       <article className="mt-20">
          <h1
            className="text-4xl 2xl:text-[50px] text-black font-bold text-center my-8"
            data-aos="slide-up"
          >
            Technologies I USE
          </h1>
          <div className="grid sm:grid-cols-1 grid-cols-3">
            <SiHtml5
                size={120}
                color="#E44D26"
                className="w-full text-center mt-20"
            />
            <SiCss3
              size={120}
              color="#274ADC"
              className="w-full text-center mt-20"
            />
            <SiJavascript
              size={120}
              color="#F0CF03"
              className="w-full text-center mt-20"
            />
            <SiReact
              size={120}
              color="#5DD1F4"
              className="w-full text-center mt-20"
            />

            <SiTypescript
              size={120}
              color="#3577C6"
              className="w-full text-center mt-20"
            />
           
            <SiNodedotjs
              size={120}
              color="green"
              className="w-full text-center mt-20 "
            />


            <SiLinux
              size={120}
              color="black"
              className="w-full text-center mt-20"
            />

            <SiTailwindcss
              size={120}
              color="#49ABA4"
              className="w-full text-center mt-20"
            />
            <SiGit
              size={120}
              color="#E64D33"
              className="w-full text-center mt-20"
            />



          </div>
        </article>
    </>
  )
}

export default TechItems
