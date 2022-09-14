import React from 'react'
import Card from './shared/Card'
import {useState} from 'react'

function FeedbackForm() {
    const [text, useText] = useState('')

   const handleTextChange = (e) => {
    useText(e.target.value)
   }

  return (
    
    <Card>
        <form>
        <h1>How would you rate our service?</h1>
        <div className='input-group'>
            <input type='text' placeholder='Write a rating' value={text}> </input>
            <Button onChange ={handleTextChange}  type = 'submit'>Send</Button>

        </div>
        
        </form>


    </Card>
  )
}

export default FeedbackForm