import React, { useContext, useEffect, useState } from 'react'
import { FlightContext } from '../companent/FlightProvider'
import '../index.css'

export default function FlightList() {
    
    const [loading , setLoading] = useState(false) 

    let { setFlights } = useContext(FlightContext)

    const mockFlights = [
        {id: 1 , from: "Алматы" , to: "Эмираты" , price: "800 000 тг" , time: "11:01" , airlne: "Air Kuanysh" , seats: "༺ᴠɪᴘ༻"},
        {id: 2 , from: "Алматы" , to: "Нью-Йорк" , price: "850 000тг" , time: "12:01" , airlne: "Air Kuanysh" , seats: "༺ᴠɪᴘ༻"},
        {id: 3 , from: "Алматы" , to: "Рио Де Жанейро" , price: "750 000тг" , time: "13:01" , airlne: "Air Kuanysh" , seats: "༺ᴠɪᴘ༻"},
        ]
        

    useEffect(()=>{
        setLoading(true)
        fetchFlitghs()
    },[])

    const fetchFlitghs =async () => {
        setTimeout(()=>{
            setFlights(mockFlights)
            setLoading(false)
        },1000)
    }
  return (
    <>
    <div className='box'>
    <h1>Ұшақ рейстері</h1>
    <input type="text"  placeholder='Қайдан немесе қайда іздеу..............'/>
    <ul>
        {mockFlights.map(flight => (
            <li key={flight.id} style={{ marginBottom: "10px" }}>
                <div className='box2'>
                <div>
                <strong>{flight.from} → {flight.to}</strong><br />
                Уақыты: {flight.time} <br />
                Бағасы: {flight.price} <br />
                Әуекомпания: {flight.airlne} <br />
                </div>
                <div>
                Орындар: {flight.seats} <br />
                <button>Брондау</button>
                </div>
                </div>
            </li>
        ))}
    </ul>
    
    </div>
    </>
  )
}
