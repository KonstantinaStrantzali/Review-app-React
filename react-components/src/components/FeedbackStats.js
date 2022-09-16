import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {

    const {feedback} = useContext(FeedbackContext)

    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    },0) / feedback.length

    average = average.toFixed(1).replace(/[.,]0$/,'')

  return (
    <div className='feedback-stats'>
    <h2>{feedback.length} Review</h2>
    <h4>{isNaN(average) ? 0 : average } </h4>

    </div>
  )
}

export default FeedbackStats
