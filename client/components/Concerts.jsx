import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Concerts = () => {
  const concerts = useSelector(redux => redux.concerts)

  return (
    <div className='concerts'>
      <h1>List of Concerts</h1>
      <Link to='/addconcert'><button>Add Concert</button></Link>
      <div className='concerts-panel-container'>
        {concerts.map(concert => (
          <>
            <div key={concert.id} className='flip-card'>
              <div className='flip-card-inner'>
                <div className='flip-card-front'>
                  <img src={concert.image} alt={`the ${concert.artist} concert`}/>
                  <p>{concert.artist}</p>
                  <p>{concert.date}</p>
                </div>
                <div className='flip-card-back'>
                  <p>{concert.artist}</p>
                  <p>{concert.date}</p>
                  <p>{concert.comments}</p>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default Concerts
