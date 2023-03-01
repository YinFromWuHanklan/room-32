import * as React from "react"
import Layout from "../components/Layout"
import "../scss/main.scss"

import { StaticImage } from "gatsby-plugin-image"
// import { HeaderImg } from "../components/HeaderImage"

const pageStyles = {
  color: "#232129",
  padding: 50,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}
const headingAccentStyles = {
  color: "#663399",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Layout>
        <div>
          <StaticImage
            src="../images/header-placeholder.jpg"
            alt="Header Room 32"
          />
        <h1 style={headingStyles}>
          Willkommen in Room 32
          <br />
          <span style={headingAccentStyles}>— dein Business Zuhause in München❤️</span>
        </h1>
      </div>
      <p>Hier findest du viele Informationen rund um deinen Aufenthalt bei Room 32 in München.</p>
      <p>WLAN-Zugang</p>

      <h2>Check-In & Check-Out</h2>
      <p>Check-In: blablabalbal</p>
      <p>
        Check-In: ab 16 Uhr 
      </p>

      <p>Check-Out: blablabalbal</p>

      <h2>Parken</h2>
      <p>Parkmöglichkeiten gibt es in direkter Nähe und in den Straßen etc.</p>

      <h2>Zimmerausstattung</h2>
      <ul>
        <li>
          Küche: Herdfunktion, Espressomaschine, was für Kaffee ist da?
        </li>
        <li>
          Schrank: Bügeleisen und Ersatzkissen drin
        </li>
        <li>
          Bad: Duschgel, Shampoo Marke
        </li>
      </ul>

      <h2>Wäsche waschen</h2>
      <p>Waschservice</p>

      <h2>Infos zu den ÖPNV</h2>
      <p>Link zu MVG, Fahrplanübersicht, Preise, etc.</p>

      <h2>Infos zu Einkaufsmöglichkeiten</h2>
      <p>Supermärkte, Drogerien</p>
      <p>Bäcker und Takeaways</p>

      <h2>Rezepte</h2>
      <p>Weißwurstfrühstück</p>

      <h2>Sehenswürdigkeiten</h2>
      <p>Marienplatz, blabla</p>
      <p>Restaurants und Cafés</p>

      <h2 id="kontakt">Kontakt</h2>
      <p>eventuell mit Foto</p>
      </Layout>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Room 32 - Your Business Home in Munich</title>
