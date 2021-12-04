import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Concerts = () => {
  const concerts = useSelector(redux => redux.concerts)

  return (
    <div className='concerts'>
      <h1>List of Concerts</h1>
      <div className='concerts-panel-container'>
        {concerts.map(concert => (
          <div key={concert.id} className='polaroid-card'>
            <img src={concert.image}/>
            <div className='polaroid-text'>
              <p>{concert.artist}</p>
              <p>{concert.date}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to='/addconcert'><button>Add Concert</button></Link>
    </div>
  )
}

export default Concerts
