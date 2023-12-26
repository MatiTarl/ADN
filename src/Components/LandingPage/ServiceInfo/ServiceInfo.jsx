import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import "./carrusel.css"

// import required modules
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';

function ServiceInfo() {

    const [dataMokeada, setDataMokeada] = useState([{
        nombre: "producto",
        imagen: "data:image/jpeg;base64,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"
    }, {
        nombre: "producto",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvrkayZ3ZK94XUcGzuk8gJGCInTi0mh3nR9A&usqp=CAU"
    }, {
        nombre: "producto",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHyaoqUtTa5LpkNXGLPlsHnW-mnkJ4dpGlA&usqp=CAU"
    }, {
        nombre: "producto",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTBAEO5gKZTRMX83gljqCozcSyimsq7hLgmA&usqp=CAU"
    }, {
        nombre: "producto",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgbkUAaKM7Jn_dxEgMEP-Oq12cqzqD0T4INA&usqp=CAU"
    }, {
        nombre: "producto",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfps5Q_6xVnl9-A6_p0iEnkzWJJaJ-i3todQ&usqp=CAU"
    }, {
        nombre: "producto",
        imagen: "https://electronicdealer.com.ar/wp-content/uploads/2022/01/81-GWj0nEkL._AC_SL1500_.jpg"
    }, {
        nombre: "producto",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvrkayZ3ZK94XUcGzuk8gJGCInTi0mh3nR9A&usqp=CAU"
    }, {
        nombre: "producto",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHyaoqUtTa5LpkNXGLPlsHnW-mnkJ4dpGlA&usqp=CAU"
    }, {
        nombre: "producto",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTBAEO5gKZTRMX83gljqCozcSyimsq7hLgmA&usqp=CAU"
    }, {
        nombre: "producto",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgbkUAaKM7Jn_dxEgMEP-Oq12cqzqD0T4INA&usqp=CAU"
    }, {
        nombre: "producto",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfps5Q_6xVnl9-A6_p0iEnkzWJJaJ-i3todQ&usqp=CAU"
    },
    ])

    return (
        <main className=" p-2 grid w-full  justify-center text-center">
            <h1 className="m-3 mb-10 text-[2rem]">!La Mejor Reparacion de Bisagras¡</h1>
            <div className="">
                <Swiper
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                    }}
                    direction={'vertical'}

                    modules={[Autoplay, Pagination, EffectCoverflow]}
                    className="mySwiper max-h-[27rem]"
                >
                    {dataMokeada.map((data) => {
                        return <SwiperSlide>{<img src={data.imagen} className=" max-h-[20] max-w-[60rem]" />}</SwiperSlide>
                    })}
                </Swiper>
            </div>

        </main>
    )
}

export default ServiceInfo;