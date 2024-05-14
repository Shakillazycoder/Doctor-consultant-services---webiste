import { Link } from "react-router-dom";
import banner from "../../src/assets/banner.png";
import { motion } from "framer-motion"
import { Fade } from "react-awesome-reveal";


const HeroSection = () => {
    return (
        <section className="bg-white dark:bg-[rgb(245,245,245)] rounded-2xl mt-10">
    <Fade direction="right" delay={200} triggerOnce={true}>
    <div className="grid max-w-screen-2xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-[#2c3e50]">Consultation Services by Doctors</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-[#2c3e50]">Expert medical advice and consultations from the comfort of your home</p>
            <Link to='/services'>
            <motion.p 
            whileHover={{
                scale:1.2,
                x: 25,
            }}
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-[#eef2f5] rounded-lg bg-[#3498db] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Book a Consultation
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </motion.p>
            </Link>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <img src={banner} alt="mockup"/>
        </div>                
    </div>
    </Fade>
</section>
    );
};

export default HeroSection;