import { motion } from "framer-motion"


const image1:string = "https://i.postimg.cc/bw5cL6Ds/dbz.webp";
const image2:string = "https://i.postimg.cc/bw5cL6Ds/dbz.webp";
const image3:string  = "https://i.postimg.cc/bw5cL6Ds/dbz.webp";

const images: string[] = [ image1, image2, image3]

const Carousel = () => {
  return (
    <section>
       <motion.div className="">
         <motion.div className="">
            {images.map(item => (
                <motion.div key={item}>
                    <img src={item} alt="imagee f" />
                </motion.div>
            ))}
        </motion.div>   
       </motion.div>
    </section>
  )
}

export default Carousel
