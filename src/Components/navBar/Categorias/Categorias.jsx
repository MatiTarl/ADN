import { NavLink } from "react-router-dom";



function Categorias () {



    return (
        <main>
         
            <NavLink to={"/Tecnologia"}>
            <button className="p-1 m-1 border border-sky-500">Tecnologia</button>
             </NavLink>
        </main>
    )
}

export default Categorias;