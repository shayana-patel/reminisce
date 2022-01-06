import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

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

  return (
    <>
      <form className='form-container' onSubmit={handleSubmit}>
        <h2>Add a trip</h2>
        <hr/>
        <div>
          <label>Country: </label>
          <imput type='text' name='country' id='country' value={formData.country} onChange={changeHandler} required />
        </div>
        <br/>
        <div>
          <label>Date: </label>
          <imput type='text' name='date' id='date' value={formData.date} onChange={changeHandler} required />
        </div>
        <br/>
        <div>
          <label>Comments: </label>
          <imput type='text' name='comments' id='comments' value={formData.comments} onChange={changeHandler} required />
        </div>
        <br/>
        <div>
          <label>Image: </label>
          <imput type='text' name='image' id='image' value={formData.image} onChange={changeHandler} required />
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
