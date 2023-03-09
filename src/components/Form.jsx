import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <div className="formName">
            <input type="text"  placeholder='First Name' />
            <input type="text"  placeholder='Last Name' />
        </div>
        <div className="formMail">
            <input type="email" name="email" id="email" placeholder='Enter Email'/>
            <input type="tel" name="number" id="number" placeholder='Enter Number'/>
        </div>
        <div className="textArea">
            <textarea name="textare" id="textare" cols="30" rows="10"></textarea>
        </div>
    </div>
  )
}

export default Form