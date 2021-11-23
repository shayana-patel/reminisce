import React from 'react'

const Concert = (props) => {
  const concert = props.concert
  return (
    <div>
      <p>Artist: {concert.artist}</p>
      <p>Location: {concert.location}</p>
      <p>Date: {concert.date}</p>
      <p>Comments: {concert.comments}</p>
    </div>
  )
}

export default Concert
