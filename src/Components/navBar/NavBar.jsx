import Categorias from "./Categorias/Categorias"
import About from "./Nosotros/About"
import Contactanos from "./Contactanos/Contactanos"
import Logo from "./LogoADN/Logo"

function NavBar() {

  return (
    <main className=" flex border h-32 border-black w-full justify-between items-center ">
      <div className=" p-2 m-2 flex justify-start">
        <Logo></Logo>
      </div>
      <div className=" p-2 m-2 flex justify-center">
        <Categorias></Categorias>
        <About></About>
        <Contactanos></Contactanos>
      </div>
    </main>
  )
}

export default NavBar