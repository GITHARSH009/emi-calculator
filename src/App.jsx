import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PurposeLoan from './pages/PurposeLoan'
import FinanceCalculator from './pages/FinanceCalculator'
import InsuranceCalculator from './pages/InsuranceCalculator'
import Description from './components/Description'
import Finance from './pages/Finance'
import Insurance from './pages/Insurance'
import Purpose from './pages/Purpose'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/purposeloan" element={<PurposeLoan />} />
        <Route path="/financecalculator" element={<FinanceCalculator />} />
        <Route path="/insurancecalculator" element={<InsuranceCalculator />} />
        <Route path="/description" element={<Description />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/purpose" element={<Purpose />} />
        <Route path="/insurance" element={<Insurance />} />
      </Routes>
    </div>
  )
}

export default App
