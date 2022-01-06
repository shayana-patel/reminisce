import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Travels = () => {
  const travels = useSelector(redux => redux.travels)

  return (
    <>
      <div className='travels'>
        <h1>List of Travels</h1>
        <Link to='/addtrip'><button>Add Trip</button></Link>
        <div className='travels-panel-container'>
          {travels.map(trip => (
            <>
              <div key={trip.id} className='flip-card'>
                <div className='flip-card-inner'>
                  <div className='flip-card-front'>
                    <img src={trip.image} alt={`a photo taken in ${trip.country}`}/>
                  </div>
                  <div className='flip-card-back'>
                    <p>{trip.country}</p>
                    <p>{trip.date}</p>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Travels
