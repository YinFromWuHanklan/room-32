import * as React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Navi from "./Nav"


export default function Layout({ children }) {
    return <div>
        <Navi />
        <Header />
        {children}
        <Footer />
    </div>
}