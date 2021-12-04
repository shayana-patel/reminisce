import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router'
import { addNewConcertData } from '../actions/concerts'

const AddConcert = () => {
  const dispatch = useDispatch()
  // const navigate = useNavigate()

  const blankForm = {
    artist: '',
    location: '',
    date: '',
    comments: '',
    image: ''
  }

  const [formData, setFormData] = useState(blankForm)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addNewConcertData(formData))
    setFormData(blankForm)
    // navigate('/concerts')
    // getAllConcerts()
  }

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <form className='form-container' onSubmit={handleSubmit}>
        <h2>Add a concert</h2>
        <hr/>
        <div>
          <label>Artist: </label>
          <input type='text' name='artist' id='artist' value={formData.artist} onChange={changeHandler} required />
        </div>
        <br/>
        <div>
          <label>Location: </label>
          <input type='text' name='location' id='location' value={formData.location} onChange={changeHandler} required />
        </div>
        <br/>
        <div>
          <label>Date: </label>
          <input type='text' name='date' id='date' value={formData.date} onChange={changeHandler} required />
        </div>
        <br/>
        <div>
          <label>Comments: </label>
          <input type='text' name='comments' id='comments' value={formData.comments} onChange={changeHandler} required />
        </div>
        <br/>
        <div>
          <label>Image: </label>
          <input type='text' name='image' id='image' value={formData.image} onChange={changeHandler} required />
        </div>
        <br/>
        <div>
          <button>Submit</button>
        </div>
        <hr/>
      </form>
    </>
  )
}

export default AddConcert
