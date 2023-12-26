import React from "react";


function InfoLocal() {

    const [imagenes, setImagenes] = React.useState([
        {
            url: "https://cartelesparaimprimir.com/wp-content/uploads/2021/11/cartel-oferta-1024x724.jpg"
        },{
            url: "https://cartelesparaimprimir.com/wp-content/uploads/2021/11/cartel-oferta-1024x724.jpg"
        },{
            url: "https://cartelesparaimprimir.com/wp-content/uploads/2021/11/cartel-oferta-1024x724.jpg"
        },
    ])


    return (
        <main className="flex w-screen h-[30rem] justify-center items-center">
            {imagenes.map( (url) => {
                return <div className="m-5 w-[23rem] h-[23rem] text-center border-2 rounded-[2rem] shadow-inner transition-all" >
                <img src={url.url} className=" max-h-[23rem] min-h-[23rem] max-w-[23rem] min-w-[23rem] rounded-[2rem] "/>
            </div>
            })}
        </main>
    )
}

export default InfoLocal;