import React from 'react'
import Image from '../images/img.png'
import Attach from '../images/attach.png'

function Input() {
  return (
    <div className='input'>
        <input type="text" placeholder='Type something here...'/>
        <div className="send">
            <img src={Image} alt="" />
            <label htmlFor="input_file">
                <img src={Attach} alt="" />
            </label>
            <input type="file" id='input_file'/>
            <button>Send</button>
        </div>
    </div>
  )
}

export default Input