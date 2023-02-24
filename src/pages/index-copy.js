import * as React from "react"

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
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Willkommen in Room 32
        <br />
        <span style={headingAccentStyles}>— dein Business Zuhause in München❤️</span>
      </h1>
      <p>Hier findest du viele Informationen rund um deinen Aufenthalt bei Room 32 in München.</p>
      <p>WLAN-Zugang</p>

      <h2>Check-In & Check-Out</h2>
      <p>Check-In: blablabalbal</p>
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

      <h2>Kontakt</h2>
      <p>eventuell mit Foto</p>

    </main>
  )
}

export default IndexPage

export const Head = () => <title>Room 32 - Your Business Home in Munich</title>
