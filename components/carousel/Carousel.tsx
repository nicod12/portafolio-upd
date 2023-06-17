import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface Projects {
  id:number,
  img:string,
  title:string,
  description:string,
}

const projects: Projects[] = [ 
  {
    id: 1,
    img: "https://i.postimg.cc/L4kWCv9c/game.png",
    title:"Games",
    description:"A Games application developed with react, webpack, babel and tailwind."
  },
  {
    id: 2,
    img: "https://i.postimg.cc/L4kWCv9c/game.png",
    title:"Games",
    description:"A Games application developed with react, webpack, babel and tailwind."
  },
  {
    id: 3,
    img: "https://i.postimg.cc/L4kWCv9c/game.png",
    title:"Games",
    description:"A Games application developed with react, webpack, babel and tailwind."
  }
]


const Carousel = () => {

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
                    className="h-[450px] w-[300px] bg-gray-600 "
                  >
                    <img className="relative top-8 w-full h-52 text-center" src={project.img} alt="Image 1" />

                      <h3 className='text-center mb-4'>{project.title}</h3>
                      <p className='text-center p-2'>{project.description}</p>


                      <div className='flex items-center justify-center flex-col mt-5'>
                       <button className='bg-red-300 w-[33.3%] py-1'>Demo</button>
                      </div>
                  </article>
                )
              })
            }
          </Slider>
        </section>
      );
}

export default Carousel
