import React from 'react'
import { useSelector } from 'react-redux'

const Concerts = () => {
  const concerts = useSelector(redux => redux.concerts)

  return (
    <div className='concerts'>
      <h1>List of Concerts</h1>
      <ul>
        {concerts.map(concert => <li key={concert.id}>{concert.artist}</li>)}
      </ul>
    </div>
  )
}

export default Concerts
