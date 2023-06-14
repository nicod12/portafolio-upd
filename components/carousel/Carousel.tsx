import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const image1:string = "https://i.postimg.cc/bw5cL6Ds/dbz.webp";
const image2:string = "https://i.postimg.cc/bw5cL6Ds/dbz.webp";
const image3:string  = "https://i.postimg.cc/bw5cL6Ds/dbz.webp";
const images: string[] = [ image1, image2, image3]

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
        <section className='my-0 mx-auto w-[350px] h-[400px] cursor-grab'>
          <Slider {...settings}>
            <div className="h-[400px] w-[250px] bg-gray-600">
              <img className="w-full h-52 text-center" src={image1} alt="Image 1" />
              <h3>Slide 1</h3>
              <p>Slide 1 content</p>
            </div>
            <div className="h-[400px] w-[250px]">
              <img className="w-full h-52 text-center" src={image2} alt="Image 2" />
              <h3>Slide 2</h3>
              <p>Slide 2 content</p>
            </div>
            <div className="h-[400px] w-[250px]">
              <img  className="w-full h-52 text-center" src={image3} alt="Image 3" />
              <h3>Slide 3</h3>
              <p>Slide 3 content</p>
            </div>
          </Slider>
        </section>
      );
}

export default Carousel
