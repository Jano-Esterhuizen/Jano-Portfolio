/**
 * @copyright 2024 Jano Esterhuizen
 * @license Apache-2.0
 */

import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Review from "./components/Review"
import Skill from "./components/Skill"
import Work from "./components/Work"

import {ReactLenis} from "lenis/react"

const App = () => {
  return (
    <ReactLenis root>
      
      <Header />
      <main>
        <Hero/>
        <About/>
        <Skill/>
        <Work/>
        <Review/>
        <Contact/>
        <Footer/>
      </main>
    </ReactLenis>
  )
}

export default App