import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { addNewTripData } from '../actions/travels'

const AddTrip = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const blankForm = {
    country: '',
    date: '',
    comments: '',
    image: ''
  }

  const [formData, setFormData] = useState(blankForm)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addNewTripData(formData))
    setFormData(blankForm)
    navigate('/travels')
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
        <h2>Add a trip</h2>
        <hr/>
        <div>
          <label>Country: </label>
          <input type='text' name='country' id='country' value={formData.country} onChange={changeHandler} required />
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

export default AddTrip
