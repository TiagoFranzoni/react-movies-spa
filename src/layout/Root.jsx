import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom"

export function Root() {
    return (
        <>
            <header>
                <h1>Primeira aplicação SPA React</h1>

            <ul> 
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/movie-detail"}>Movie Detail</Link></li>
            </ul>

            </header>

            <section className="page-detail">
                <Outlet />
            </section>

            <footer>
                Copyrigth 2050. Frameworks React.
            </footer>

        </>
    ) 
}