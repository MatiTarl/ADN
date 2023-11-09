import NavBar from "../navBar/NavBar";
import Carrusel from "./Carrusel/Carrusel";
import EndPage from "./EndPage/EndPage";
import InfoLocal from "./InfoLocal/InfoLocal";
import ServiceInfo from "./ServiceInfo/ServiceInfo";

function LandingPage() {

    return (
        <main className="border border-red-700 w-screen h-full">
            <NavBar></NavBar>
            <Carrusel></Carrusel>
            <InfoLocal></InfoLocal>
            <ServiceInfo></ServiceInfo>
            <EndPage></EndPage>
        </main>
    )
}


export default LandingPage;