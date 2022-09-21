import React from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [rating, setRating] = useState()
    const [message, setMessage] = useState('')
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
    return (
        <div>
            <Card>
                <form>
                     <h2>How would you rate our service?</h2>
                     <RatingSelect></RatingSelect>
                    <div className='input-group'>
                        <input onChange={handleTextChange}
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


        </div>
    )
}


export default FeedbackForm