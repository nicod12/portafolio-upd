import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface Projects {
  id:number,
  description:string,
  backgoundImg:string,
  uri:string
}

const projects: Projects[] = [
  {
    id: 1,
    description:"Una excelente app que te permite organizar mejor tus tareas, desarrolada con react, typescript, todomvc-app-css.",
    backgoundImg:"https://i.pinimg.com/564x/01/ec/26/01ec260b1f6bbb008989dc1dddbf9a9c.jpg",
    uri:"https://todo-lap.vercel.app/"
  },
  {
    id: 2,
    description:"Una aplicación de juegos desarrollada con React, webpack, babel y tailwind.",
    backgoundImg:"https://i.pinimg.com/564x/90/f7/11/90f71115f7c1c74eeab3e2e8a59478d1.jpg",
    uri:"https://wp-games.netlify.app/"
  },
  {
    id: 3,
    description:"Una demo web creada con react, typescript, tailwind.",
    backgoundImg:"https://i.pinimg.com/564x/de/79/fc/de79fcbb6777f77614089152831c9d13.jpg",
    uri:"https://cod-demo-web.vercel.app/"
  },
  {
    id: 4,
    description:"El clasico juego del ahorcado desarrolado con react y typescript",
    backgoundImg:"https://i.pinimg.com/564x/50/9a/99/509a995c6ef3141f8681ba8af297637f.jpg",
    uri:"https://hangman-game-amber.vercel.app/"
  }
]



const Carousel = () => {

  const handleClick = (uri:string) => {
    window.location.href = uri;
  };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
      };

      return (
        <section className='my-0 mx-auto w-[300px] h-[450px] cursor-grab  border-[1px] border-gray-200 shadow-md'>
          <Slider {...settings}>

            {
              projects.map((project, index) => {
                return(
                  <article
                    key={index}
                    className="h-[450px] w-[300px] bg-gray-600 relative "
                  >

                    <img className="text-center bg-cover bg-no-repeat bg-center bg-fixed absolute w-full h-full" src={project.backgoundImg} alt="Image 1" />
                      <div className='absolute top-[50%] -translate-y-[50%] w-full bg-transparent backdrop-blur-[15px]'>
                        <p className='text-center font-bold  text-orange-700 bottom-0 top-full p-2'>{project.description}</p>
                      </div>
                       <button
                          onClick={() => handleClick(project.uri)}
                          className='bg-orange-600 hover:bg-orange-500 hover:transition text-white rounded-md top-[68%] -translate-y-[68%] left-[50%] -translate-x-[50%] absolute w-[33.3%] py-1'
                      >
                        Demo
                      </button>
                  </article>
                )
              })
            }
          </Slider>
        </section>
      );
}

export default Carousel;
