import React, { Fragment } from 'react'

const Contact = () => {
  return (
    <Fragment>
      <div className='contact'>
      <main>
        <h1>Contact Us</h1>
        <form >
          <div>
            <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter your name' required />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" placeholder='abc@gamil.com' required />
          </div>
          <div>
            <label htmlFor="">Message</label>
            <input type="text" placeholder='Ask your query...' required />
          </div>
          <button type='submit'>Send</button>
        </form>
      </main>

      </div>
    </Fragment>
  )
}

export default Contact
