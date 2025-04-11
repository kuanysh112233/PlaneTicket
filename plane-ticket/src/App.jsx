import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FlightProvider from './companent/FlightProvider'
import FlightList from './pages/FlightList'
import FlightBooking from './pages/FlightBooking'

export default function App() {

  return (
    <>
    <FlightProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<FlightList/>}/>
        <Route path="/booking/:flightId" element={<FlightBooking/>}/>
      </Routes>
      </BrowserRouter>
    </FlightProvider>
    </>
  )
}


