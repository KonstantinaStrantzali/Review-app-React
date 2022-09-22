import React from 'react'
import Card from './shared/Card'
import { useState, useContext,useEffect } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {

    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [rating, setRating] = useState()
    const [message, setMessage] = useState('')

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
      if (feedbackEdit.edit === true) {
        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
      }
    }, [feedbackEdit])


    const handleTextChange = (e) => {  //(e) event parametr cause we need to get what is inside the event
        if (text === '') {
            setBtnDisabled(true)
            setMessage(null)

            // prettier-ignore
        } else if (text.trim().length < 10) { // 👈 check for less than 10
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }

        setText(e.target.value)
    }
    const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10){
        const newFeedback = {
            text,
            rating,
        }
        if (feedbackEdit.edit === True) {
          updateFeedback(feedbackEdit.item.id, newFeedback)
        } else { 
          addFeedback(newFeedback)
        }
        
        setText('')
    }
}

    return (
        <Card>
          <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={setRating} selected={rating} />
            <div className='input-group'>
              <input
                onChange={handleTextChange}
                type='text'
                placeholder='Write a review'
                value={text}
              />
              <Button type='submit' isDisabled={btnDisabled}>
                Send
              </Button>
            </div>
    
            {message && <div className='message'>{message}</div>}
          </form>
        </Card>
      )
    }
    
    export default FeedbackForm