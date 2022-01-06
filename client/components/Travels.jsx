import React from 'react'
import { useSelector } from 'react-redux'

const Travels = () => {
  const travels = useSelector(redux => redux.travels)

  return (
    <div>
      <h1>List of Travels</h1>
      <div className='travels-panel-container'>
        {travels.map(trip => (
          <div key={trip.id}>
            <img src={trip.image}/>
            <p>{trip.country}</p>
            <p>{trip.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Travels
