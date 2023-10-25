import { NavLink } from "react-router-dom"



function Contactanos () {
    return (
        <main>
            <NavLink to={"/ContactUs"}>
            <button className="p-1 m-1 border border-sky-500">Contactanos</button>
            </NavLink>
        </main>
    )
}

export default Contactanos