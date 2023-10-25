import NavBar from "../navBar/NavBar";
import Carrusel from "./Carrusel/Carrusel";
import EndPage from "./EndPage/EndPage";
function LandingPage() {

    return (
        <main className="border border-red-700">
            <NavBar></NavBar>
            <Carrusel></Carrusel>
            <EndPage></EndPage>
        </main>
    )
}


export default LandingPage;