/**
 * @copyright 2024 Jano Esterhuizen
 * @license Apache-2.0
 */

import About from "./components/About"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skill from "./components/Skill"
import Work from "./components/Work"

const App = () => {
  return (
    <>
      
      <Header />
      <main>
        <Hero/>
        <About/>
        <Skill/>
        <Work/>
      </main>
    </>
  )
}

export default App