import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Nav/Navbar'
import Account from './components/Account/Account'
import PremierLeague from './components/League/PremierLeague'
import Card from './components/CasinoCard/CasinoCard'
import GameCard from './components/Games/GameCards'
import LiveCasino from './components/LiveCasino/LiveCard'
import Footer from './components/Footer/Footer'

import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Body">
          <Account />
          <PremierLeague />
          <Card />
          <GameCard text="Casino" />
          <GameCard text="Top Rated Games" />
          <LiveCasino />
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
