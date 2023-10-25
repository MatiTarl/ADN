import { NavLink } from "react-router-dom"



function Logo () {


    return (
        <main>
            <NavLink to={"/"}>
            <button className="p-1 m-1 "><img src="/MarcaSinFondo1.png" className=" h-40"></img></button>
            </NavLink>
        </main>
    )
}

export default Logo