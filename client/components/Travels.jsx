import React from 'react'
import { useSelector } from 'react-redux'

const Travels = () => {
  const travels = useSelector(redux => redux.travels)

  return (
    <div>
      <h1>List of Travels</h1>
      <div>
        {travels.map(travel => (
          <div key={travel.id}>
            <img src={travel.image}/>
            <p>{travel.country}</p>
            <p>{travel.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Travels
