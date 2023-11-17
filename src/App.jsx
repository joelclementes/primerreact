import { useState } from 'react'

import './App.css'
// import './MiPortafolio.css'
// import './Legislatura.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'

import Navbar from './components/Navbar'
import Legisladores from './components/Legisladores'

import SignupForm from './components/SignupForm'
function App() {
  
  const [searchLegis, setSearchLegis] = useState('')

  const handleNavbarSearch = (legis) => {
    setSearchLegis(legis)
  }
  // console.log(searchLegis,10)


  return (
    <>
      <div className="d-flex flex-column align-items-center">
        {/* <Header/> */}
        {/* <AboutMe/> */}
        
        {/* <SignupForm/> */}
        <Navbar onSearch={handleNavbarSearch}/>
        <Legisladores searchLegis={searchLegis}/>

      </div>
    </>
  )
}

export default App
