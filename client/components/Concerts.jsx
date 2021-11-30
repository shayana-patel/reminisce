import React from 'react'
import { useSelector } from 'react-redux'

const Concerts = () => {
  const concerts = useSelector(redux => redux.concerts)

  return (
    <div className='concerts'>
      <h1>List of Concerts</h1>
      <div>
        {concerts.map(concert => (
          <div key={concert.id} className='polaroid-base'>{concert.artist}</div>
        ))}
      </div>
    </div>
  )
}

export default Concerts
