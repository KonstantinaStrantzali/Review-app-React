import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import {useState} from 'react'
import RatingSelect from './RatingSelect'
import { useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    
    const [text, setText] = useState('')
    const [btnDisable, setBtnDisable] = useState(true)
    const [message, setMessage] = useState("")
    const [rating, setRating] = useState(10)
    const {addFeedback, feedbackEdit} = useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisable(false)
      setText(feedbackEdit.item.text)
    }


  },[feedbackEdit])

   const handleTextChange = (e) => {
    setText(e.target.value)
    if (text !=='') {
      setBtnDisable(true)
      setMessage(null)
    } else if ( text !== "" && text.trim().length <= 10){
      setBtnDisable(true)
      setMessage("Text must be at least 10 characters")
    } else {
      setBtnDisable(false)
      setMessage(null)

    }
   }

   const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10 ) {
      const newFeedback = {
        text,
        rating,
      }
      addFeedback(newFeedback)
    }
   }
  return (
    
    <Card>
        <form onSubmit={handleSubmit}>
        <h1>How would you rate our service?</h1>
       <RatingSelect select={setRating} selected={rating}></RatingSelect>
        <div className='input-group'>
            <input type='text' placeholder='Write a rating' value={text}  onChange={handleTextChange}/>
            <Button onChange ={handleTextChange} isDisabled = {btnDisable} type = 'submit'>Send</Button>

        </div>
        {message && <div className='message'>{message}</div>}
        
        </form>


    </Card>
  )
}

export default FeedbackForm