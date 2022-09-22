import React from 'react'
import Card from './shared/Card'
import { FaTimes, FaEdit} from 'react-icons/fa'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'
  
function FeedbackItem({item}) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
      <button className='close' onClick={() => deleteFeedback(item.id)}>
      <FaTimes  color ='purple'></FaTimes>
      </button>
      <button className='edit' onClick={() => editFeedback(item)}>
      <FaEdit color = "purple"></FaEdit>
      </button>
    </Card>
  )
}

export default FeedbackItem
