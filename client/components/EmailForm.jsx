import React from 'react'
import emailjs from 'emailjs-com'

const EmailForm = () => {
  // const form = useRef()

  // const blankForm = {
  //   artist: '',
  //   location: '',
  //   date: '',
  //   comments: '',
  //   image: ''
  // }

  // const [formData, setFormData] = useState(blankForm)

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_u3ge313', 'template_s79gi5g', e.target, 'user_V5mIjEtOWaKwYllQ7XxOi')
      .then((result) => {
        return console.log(result.text)
      })
      .catch((error) => {
        return console.log(error.text)
      })
    e.target.reset()
  }

  // const changeHandler = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   })
  // }

  return (
    <>
      <form className='form-container' onSubmit={sendEmail}>
        <h2>Add a concert</h2>
        <hr/>
        <div>
          <label>Artist: </label>
          <input type='text' name='artist' id='artist' required />
        </div>
        <br/>
        <div>
          <label>Location: </label>
          <input type='text' name='location' id='location' required />
        </div>
        <br/>
        <div>
          <label>Date: </label>
          <input type='text' name='date' id='date' required />
        </div>
        <br/>
        <div>
          <label>Comments: </label>
          <input type='text' name='comments' id='comments' required />
        </div>
        <br/>
        <div>
          <label>Image: </label>
          <input type='text' name='image' id='image' required />
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

export default EmailForm
