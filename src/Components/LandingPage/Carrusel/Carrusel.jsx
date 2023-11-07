import { useState, useEffect } from "react";
import { Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import "./carrusel.css"

// import required modules
import { Autoplay, Pagination, Navigation, EffectCoverflow} from 'swiper/modules';

function Carrusel () {

    const [dataMokeada, setDataMokeada] = useState([{
        nombre: "producto",
        imagen: "https://electronicdealer.com.ar/wp-content/uploads/2022/01/81-GWj0nEkL._AC_SL1500_.jpg"
    },{
        nombre: "producto",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvrkayZ3ZK94XUcGzuk8gJGCInTi0mh3nR9A&usqp=CAU"
    },{
        nombre: "producto",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHyaoqUtTa5LpkNXGLPlsHnW-mnkJ4dpGlA&usqp=CAU"
    },{
        nombre: "producto",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTBAEO5gKZTRMX83gljqCozcSyimsq7hLgmA&usqp=CAU"
    },{
        nombre: "producto",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgbkUAaKM7Jn_dxEgMEP-Oq12cqzqD0T4INA&usqp=CAU"
    },{
        nombre: "producto",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfps5Q_6xVnl9-A6_p0iEnkzWJJaJ-i3todQ&usqp=CAU"
    },{
        nombre: "producto",
        imagen: "https://electronicdealer.com.ar/wp-content/uploads/2022/01/81-GWj0nEkL._AC_SL1500_.jpg"
    },{
        nombre: "producto",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvrkayZ3ZK94XUcGzuk8gJGCInTi0mh3nR9A&usqp=CAU"
    },{
        nombre: "producto",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHyaoqUtTa5LpkNXGLPlsHnW-mnkJ4dpGlA&usqp=CAU"
    },{
        nombre: "producto",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTBAEO5gKZTRMX83gljqCozcSyimsq7hLgmA&usqp=CAU"
    },{
        nombre: "producto",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgbkUAaKM7Jn_dxEgMEP-Oq12cqzqD0T4INA&usqp=CAU"
    },{
        nombre: "producto",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfps5Q_6xVnl9-A6_p0iEnkzWJJaJ-i3todQ&usqp=CAU"
    },
])
    
    return (
        <main className=" p-2 flex w-full border border-black justify-center">
            <div className="">
                <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
            clickable: true,
          }}
        autoplay={{
            delay: 4500,
            disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, EffectCoverflow]}
        className="mySwiper max-w-[80rem]"
      >
        {dataMokeada.map((data) => {
           return <SwiperSlide>{<img src={data.imagen} className=" max-h-[20] max-w-[20rem]"/>}</SwiperSlide> 
        })}
      </Swiper>
            </div>
            
        </main>
    )
}

export default Carrusel;