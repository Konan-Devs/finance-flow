import{Swiper, SwiperSlide} from "swiper/react"
import {EffectCoverflow, Autoplay} from "swiper/modules"
import passport from '../assets/passport.png'

import "swiper/css"
import "swiper/css/effect-coverflow"

const slides = [
    {id: 1, name:"John Carter", desc:"role.company"},
    {id: 2, name:"Esther Chigozie", desc:"role.company"},
    {id: 3, name:"Siegfried Dansch", desc:"role.company"},
    {id: 4, name:"Tanaka Hideyoshi", desc:"role.company"},
    {id: 5, name:"N'golo Kante", desc:"role.company"},
];

function Carousel() {
    return(
        <Swiper
            modules={[EffectCoverflow, Autoplay]}
            effect = "coverflow"
            centeredSlides
            slidesPerView = {3}
            spaceBetween = {10}
            loop 
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            coverflowEffect ={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            }}
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 1,
                },
                640:{
                    slidesPerView: 1.8,
                    spaceBetween: 3,
                },
                1024:{
                    slidesPerView: 2,
                    spaceBetween: 5,
                }
            }}
            className="w-[85vw] px-26 absolute z-2 "
        >
            {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                    <div className="slide-card rounded-2xl bg-dark-blue py-6 px-10 shadow-lg transition-all duration-500 w-140 h-70 flex flex-col align-start justify-between">

                        <p className="text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quos, excepturi deserunt laboriosam animi mollitia qui error. Reiciendis est neque eveniet facilis, dolore possimus accusantium. Sapiente harum dolor ex quisquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. In tenetur sequi ipsa asperiores aliquid? Repellendus, aliquid distinctio est impedit itaque suscipit adipisci sequi.</p>

                        <div className="flex align-start justify-start gap-3 ml-0">
                            <img src={passport} alt="id" className="w-auto h-auto"/>
                            <div className="flex flex-col gap-0 align-start ">
                                <h1 className="text-white text-lg font-bold"> {slide.name} </h1>

                                <p className="text-white"> {slide.desc} </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}

        </Swiper>
    );
}

export default Carousel;