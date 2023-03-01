import * as React from "react"
import { Link } from "gatsby"

export default function Nav() {
    return <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="#kontakt">Kontakt</Link>
            </li>
            <li>
                <Link to="#kontakt">Kontakt</Link>
            </li>
            <li>
                <Link to="#kontakt">Kontakt</Link>
            </li>
        </ul>
    </nav>
}