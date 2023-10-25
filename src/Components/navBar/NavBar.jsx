import Categorias from "./Categorias/Categorias"
import About from "./Nosotros/About"


function NavBar() {

    return (
        <main className=" p-2 m-2 flex border border-black w-screen justify-start">
          <Categorias></Categorias>
          <About></About>
        </main>
    )
}

export default NavBar