import { NavLink } from "react-router-dom";


function About () {


    return (
        <main>
            <NavLink to={"/AboutUs"}>
            <button className="p-1 m-1 border border-sky-500">Nosotros</button>
            </NavLink>
        </main>
    )
}

export default About;