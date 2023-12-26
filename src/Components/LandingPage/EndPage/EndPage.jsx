function EndPage() {
    return (
        <main className="flex w-screen bottom-0 border-t-2 border-black">
            <div className="p-1 m-1  flex w-screen">
                <div className="  w-[25%]">
                    <img src="./MarcaSinFondo1.png" className=" max-w-[250px]" />
                </div>
                <div className="   w-[30%] flex">
                    <div className=" p-3 items-start mt-3">
                        <h1 className=" pl-3">Direccion</h1>
                        <hr className=" m-3 w-[20rem]" />
                        <h1 className=" pl-3">Av. Bandera de los Andes 3753 Local 1, M5521 Guaymallén, Mendoza</h1>
                    </div>
                </div>
                <div className=" w-[25%]">
                    <div className="p-3 ml-1 mt-3">
                        <h1>Contacto</h1>
                    </div>
                    <hr className="m-[0.01rem]" />
                    <div className="p-2 grid ml-1">
                        <p>Celular y WhatsApp:</p>
                        <p>+54 (261) 368-8606</p>
                        <a>Contactanos</a>
                    </div>
                    <hr className="m-3" />
                    <div className="p-2 grid ">
                        <p>Nuestras Redes Sociales</p>
                        <br />
                        <div className=" flex">
                            <a href="#" className=""><img className=" h-[3rem] w-[3rem]" src="./facebook.png" /></a>
                            <a href="#"><img className=" h-[3rem] w-[3rem] ml-2" src="./whatsapp.png" /></a>
                            <a href="#"><img className="  h-[3rem] w-[3rem] ml-2" src="./linkedin.png" /></a>
                            <a href="#"><img className="  h-[3rem] w-[3rem] ml-2" src="./logotipo-de-instagram.png" /></a>
                        </div>
                    </div>
                </div>
                <div className="w-[20%]">
                    <div className=" p-2 mt-3">
                        Metodos de pago
                    </div>
                    <hr className="m-[0.5rem]"/>
                    <div className="p-2">

                    </div>
                </div>
            </div>
        </main>
    )
}

export default EndPage;